const express = require("express");
const router = express.Router();
const job = require("../Models/jobs");
const verifyAuth = require("../Middlewares/verifyAuth");
const moment = require('moment');
// const requireAuth = require("../Middlewares/verifyAuth");

router.post("/job-post", verifyAuth, async (req, res) => {
  try {
    const {
      companyName,
      // createdAt,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      modeOfWork,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
    } = req.body;
    console.log({companyName,
      // createdAt,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      modeOfWork,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,})
    let skill = skillsRequired;
    if(typeof skillsRequired === 'string')
     skill = skillsRequired.split(",").map((skill)=>skill.trim());
    // console.log(req.body.user);
    const newJob = await job.findOne({
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      modeOfWork,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired:skill,
      information,
    });
    
    if (!newJob) {
      const newPost =  await new job({
        companyName,
        logoUrl,
        jobPosition,
        monthlySalary,
        jobType,
        modeOfWork,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired:skill,
        information,
      }).save();
      return res.json({ message: "Successfully created job-post" });
    }
    res.json({ message: "Job-post already exists" });
  } catch (err) {
    console.log(err, "Something went wrong");
    res.json({ message: "Couldnt create the job-post" });
  }
});

router.get("/get-jobs", async(req, res) => {
  try{
    const { skills, jobTitle } = req.query;
  const findJobs = await job.find(
    {
      skillsRequired: { $regex: skills, $options: "i" },
      jobPosition: { $regex: jobTitle, $options: "i" },
    },
    { jobPosition: 1, monthlySalary: 1 }
    );
    res.json({message:'Jobs search successful', data:findJobs});
}
  catch(err){
    console.log(err,'Something went wrong');
    res.json({message:'Couldnt find jobs'});
  }
});

router.get('/job-description/:id',async(req,res)=>{
  try{
    const {id} = req.params;
  const getJobDetail = await job.findById(id);
  if(!getJobDetail) return res.json({message:'Couldnt find the job-details'});
  let timeElapsed = getJobDetail.createdAt;
  timeElapsed = moment(timeElapsed).fromNow();
  sendDetails = {...getJobDetail._doc,time:timeElapsed};
  res.json({message:'Success',data:sendDetails,});
}catch(err){
  console.log(err,'Something went wrong');
  res.json('Couldnt find the details');
}
})

module.exports = router;
