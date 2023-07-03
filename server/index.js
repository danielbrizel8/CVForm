const PORT = 5000; 
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const registerRoutes = require('./routes/registerRoute'); 
const CVRoutes = require('./routes/CVForm.Route'); 
require('dotenv').config()

mongoose
  .connect(
    `mongodb+srv://danielbrizel:daniel8888@cluster0.cf9h6xx.mongodb.net/?retryWrites=true&w=majority`
  ).then(() => {
    console.log("successfully connected")
  })


app.use(cors());
app.use(express.json());


app.use('/register', registerRoutes);
app.use('/CV', CVRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
