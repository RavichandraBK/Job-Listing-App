const mong = require('mongoose');
const moment = require('moment');

const Job = mong.model('Job',{
    _id:{type:mong.Schema.Types.ObjectId,auto:true},
    companyName: {type:String, required:true,},
    createdAt:{type:Date,default:Date.now()},
    logoUrl: {type:String, required:true,},
    jobPosition: {type:String, required:true},
    monthlySalary: {type:String, required:true,},
    jobType: {type:String, enum:['Full-Time','Intership'],required:true},
    modeOfWork: {type:String, enum:['Remote','office'],required:true},
    location: {type:String, required:true},
    jobDescription: {type:String, required:true},
    aboutCompany: {type:String, required:true},
    skillsRequired: {type:[String], required:true,},
    information: {type:String, required:true},
})

module.exports = Job;