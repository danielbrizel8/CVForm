const mongoose = require('mongoose');
const { Schema } = mongoose;

const CVFormModel = new Schema({
    fullName: {type: String},
    job: {type: String},
    image: {type: String},
    linkedin: {type: String},
    phoneNumber: {type: String},
    email: {type: String},
    introduction: {type: String},
    experience: [
        {
            title: {type: String}, 
            company: {type: String}, 
            location: {type: String}, 
            startYear: {type: String}, 
            finishYear: {type: String}, 
            details: {type: String}, 
        }
    ],
    education: [
        {
            title: {type: String}, 
            studies: {type: String}, 
            location: {type: String}, 
            startYear: {type: String}, 
            finishYear: {type: String},
            details: {type: String}, 
        }
    ],
    languages: [
        {
            language: {type: String}, 
            level: {type: String},  
        }
    ],
    skills: [
        {
            skill: {type: String},  
        }
    ],
    TechStacks: [
        {
            TechStack: {type: String},  
        }
    ],
});

module.exports = mongoose.model('CVForm', CVFormModel);

