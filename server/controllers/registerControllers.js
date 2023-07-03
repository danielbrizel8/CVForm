const Register = require("../models/register");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const CVInfo= require('../models/CVForm')


const fetchRegister = async (req, res) => {
  try {
    const allRegister = await Register.find({});
    res.status(200).json(allRegister);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


const publishRegister = async (req, res) => {
  try {
    const registerExists = await Register.findOne({ username: req.body.username });
    if (registerExists) {
      return res.status(400).json("User is already registered!");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const cvinfo = await CVInfo.create({})
    const newRegister = await Register.create({username: req.body.username, password: hashedPassword, CVInfo: cvinfo._id});
    return res.status(200).json(newRegister);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const loginFunction = async (req, res) => {
    try {
      const registerExists = await Register.findOne({ username: req.body.username});
      const isMatch = await bcrypt.compare(req.body.password, registerExists.password);
      const token  = jwt.sign({id : registerExists._id}, process.env.SECRET)
  
      if (isMatch) {
        console.log("Into IF");
        return res.status(200).json(token);
      }
      else{
          return res.status(400).json("Wrong Credentials!");
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
   

  const returnData = async (req, res) => {
    const token = req.body.token
    const realid = jwt.verify(token, process.env.SECRET)
    // console.log(realid, "This is the real id");
    try{
      const user = await Register.findById({_id: realid.id}).populate('CVInfo')
      // console.log(user, "This is the user");
      return res.status(200).json(user)
    }catch  (err) {
      return res.status(500).json(err.message);
    }
  }
   
  const returnUser = async (req, res) => {
    const token = req.body.token
    const realid = jwt.verify(token, process.env.SECRET)
    // console.log(realid, "This is the real id");
    try{
      const user = await Register.findById({_id: realid.id})
      return res.status(200).json(user)
    }catch  (err) {
      return res.status(500).json(err.message);
    }
  }
   

module.exports = { fetchRegister, publishRegister, loginFunction, returnData, returnUser};
