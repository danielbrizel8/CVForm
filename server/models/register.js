const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerModel = new Schema({
    username:  { type: String, required: true, unique: true },
    password: { type: String, required: true },
    CVInfo: {type: mongoose.Types.ObjectId, ref: 'CVForm'}
});

module.exports = mongoose.model('Register', registerModel);

