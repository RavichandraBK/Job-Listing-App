import React from "react";
import styles from "./JobPost.module.css";
import { useState } from "react";
import { NewJobPost } from "../../apis/jobs";
import addJobImage from "../../assets/pics/addJobPic.png";

const JobPost = () => {
  const [job, setJob] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    modeOfWork: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    information: "",
  });
  const [error, setError] = useState("");

  const handleAddJob = async () => {
    const error = validation();

    if (Object.keys(error).length === 0) {
      const response = await NewJobPost(job);
      if (response) console.log("job post created successfully");
      setJob({
        ...job,
        companyName: "",
        logoUrl: "",
        jobPosition: "",
        monthlySalary: "",
        jobType: "",
        modeOfWork: "",
        location: "",
        jobDescription: "",
        aboutCompany: "",
        skillsRequired: "",
        information: "",
      });
      return;
    }
    console.log(error);
    setError(error);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value && error[name]) {
      setError({ ...error, [name]: "" });
    }
    setJob({
      ...job,
      [name]: value,
    });
  };

  const validation = () => {
    const error = {};
    if (!job.companyName) error["companyName"] = "Field is Required";

    if (!job.logoUrl) error["logoUrl"] = "Field is Required";

    if (!job.jobPosition) error["jobPosition"] = "Field is Required";

    if (!job.monthlySalary) error["monthlySalary"] = "Field is Required";

    if (!job.jobType) error["jobType"] = "Field is Required";

    if (!job.modeOfWork) error["modeOfWork"] = "Field is Required";

    if (!job.location) error["location"] = "Field is Required";

    if (!job.jobDescription) error["jobDescription"] = "Field is Required";

    if (!job.aboutCompany) error["aboutCompany"] = "Field is Required";

    if (!job.skillsRequired) error["skillsRequired"] = "Field is Required";

    if (!job.information) error["information"] = "Field is Required";

    return error;
  };
  return (
    <>
      <div className={styles.addJob}>
        <div className={styles.addJobLeft}>
          <h1>Add job description</h1>
          <div className={styles.intyp1}>
            <label htmlFor="">Company Name </label>
            <input
              type="text"
              value={job.companyName}
              name="companyName"
              placeholder="Enter your company name here"
              onChange={handleChange}
            />
          </div>
          {error.companyName && (
            <p className={styles.error}>{error.companyName}</p>
          )}
          <div className={styles.intyp1}>
            <label htmlFor="">Add logo URL</label>
            <input
              type="text"
              value={job.logoUrl}
              name="logoUrl"
              placeholder="Enter the link"
              onChange={handleChange}
            />
          </div>
          {error.logoUrl && <p className={styles.error}>{error.logoUrl}</p>}
          <div className={styles.intyp1}>
            <label htmlFor="">Job position</label>
            <input
              type="text"
              value={job.jobPosition}
              name="jobPosition"
              placeholder="Enter job position"
              onChange={handleChange}
            />
          </div>
          {error.jobPosition && (
            <p className={styles.error}>{error.jobPosition}</p>
          )}
          <div className={styles.intyp1}>
            <label htmlFor="">Monthly salary</label>
            <input
              type="text"
              value={job.monthlySalary}
              name="monthlySalary"
              placeholder="Enter Amount in rupees"
              onChange={handleChange}
            />
          </div>
          {error.monthlySalary && (
            <p className={styles.error}>{error.monthlySalary}</p>
          )}
          <div className={styles.intyp2}>
            <label htmlFor="">Job Type</label>
            <select value={job.jobType} name="jobType" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Intership">Intership</option>
            </select>
          </div>
          {error.jobType && <p className={styles.error1}>{error.jobType}</p>}
          <div className={styles.intyp2}>
            <label htmlFor="">Remote/office</label>
            <select
              value={job.modeOfWork}
              name="modeOfWork"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Remote">Remote</option>
              <option value="office">office</option>
            </select>
          </div>
          {error.modeOfWork && (
            <p className={styles.error1}>{error.modeOfWork}</p>
          )}
          <div className={styles.intyp3}>
            <label htmlFor="">Location</label>
            <input
              type="text"
              value={job.location}
              name="location"
              placeholder="Enter Location"
              onChange={handleChange}
            />
          </div>
          {error.location && <p className={styles.error2}>{error.location}</p>}
          <div className={styles.intyp4}>
            <label htmlFor="">Job Description</label>
            <input
              type="text"
              value={job.jobDescription}
              name="jobDescription"
              placeholder="Type the job description"
              onChange={handleChange}
            />
          </div>
          {error.jobDescription && (
            <p className={styles.error2}>{error.jobDescription}</p>
          )}
          <div className={styles.intyp4}>
            <label htmlFor="">About Company</label>
            <input
              type="text"
              value={job.aboutCompany}
              name="aboutCompany"
              placeholder="Type about your company"
              onChange={handleChange}
            />
          </div>
          {error.aboutCompany && (
            <p className={styles.error2}>{error.aboutCompany}</p>
          )}
          <div className={styles.intyp3}>
            <label htmlFor="">Skills Required</label>
            <input
              type="text"
              value={job.skillsRequired}
              name="skillsRequired"
              placeholder="Enter the must have skills (eg:HTML,CSS)"
              onChange={handleChange}
            />
          </div>
          {error.skillsRequired && (
            <p className={styles.error2}>{error.skillsRequired}</p>
          )}
          <div className={styles.intyp3}>
            <label htmlFor="">Information</label>
            <input
              type="text"
              value={job.information}
              name="information"
              placeholder="Enter the additional information"
              onChange={handleChange}
            />
          </div>
          {error.information && (
            <p className={styles.error2}>{error.information}</p>
          )}
          <div className={styles.btns}>
            <button>Cancel</button>
            <button onClick={handleAddJob}>+ Add Job</button>
          </div>
        </div>
        <div className={styles.addJobRight}>
          <p>Recruiter add job details here</p>
          <img src={addJobImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default JobPost;
