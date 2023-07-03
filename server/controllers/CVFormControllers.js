const CVForm = require("../models/CVForm");
const User = require("../models/register");

const publishCVForm = (req, res) => {
  try {
    const { userId, formData } = req.body;
    CVForm.create(formData).then((data) => {
      User.findByIdAndUpdate(
        { _id: userId },
        { CVInfo: { _id: data._id } },
        { new: true }
      )
        .populate("CVInfo")
        .then((updatedPost) => {
          console.log();
          res.status(200).json(updatedPost);
        });
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const editCVForm = async (req, res) => {
    try{
        console.log(req.body);
     const user = await CVForm.findByIdAndUpdate(
          { _id: req.body.id},
           req.body.formData
        )
        res.status(200).send ('success')
    }
    catch(err){
    console.log(err);
    }
};

module.exports = { publishCVForm, editCVForm };
