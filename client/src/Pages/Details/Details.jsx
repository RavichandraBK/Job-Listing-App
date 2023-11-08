import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import styles from "./Details.module.css";
import stip from "../../assets/icons/stipend.svg";
import cal from "../../assets/icons/calender.svg";
import { jobDetails } from "../../apis/jobs";
import { useEffect } from "react";
import { useState } from "react";

const Details = () => {
  const [jobInfo, setJobInfo] = useState({});
  const [skill, setSkill] = useState([]);

  const chkLogin = !!localStorage.getItem("UserToken");
  const mode = jobInfo.modeOfWork === "Remote" ? "home" : "office";

  useEffect(() => {
    const jobId = "654baf0aecd9de4ecd0f9906";

    const showDetais = async (jobId) => {
      const jobRes = await jobDetails(jobId);
      // console.log(jobRes.data.data.location);
      setSkill(jobRes.data.data.skillsRequired);
      setJobInfo(jobRes.data.data);
    };
    showDetais(jobId);
  }, []);

  return (
    <div className={styles.details}>
      <NavBar />
      <div className={styles.detailsTop}>
        <p>
          {jobInfo.jobPosition} work from {mode} job/internship at{" "}
          {jobInfo.companyName}
        </p>
      </div>
      <div className={styles.detailsBottom}>
        <div>
          <div className={styles.detailsJobType}>
            <p>{jobInfo.time} . {jobInfo.jobType}</p>
            <div>
              <p>
                {jobInfo.jobPosition}
                {/* WordPress Developer */}
                <br />
                <span className={styles.detailsJobLoc}>
                  {jobInfo.location ? jobInfo.location : ""} | India
                </span>
              </p>
              {chkLogin ? <button>Edit job</button> : ""}
            </div>
          </div>
          <div className={styles.detailsJobSalary}>
            <div>
              <p>
                <img className={styles.detailsSalIcon} src={stip} alt="" />
                Stipend
              </p>
              <p>Rs {jobInfo.monthlySalary}</p>
            </div>
            <div>
              <p>
                <img className={styles.detailsSalIcon} src={cal} alt="" />
                Duration
              </p>
              <p>6 Months</p>
            </div>
          </div>
          <div>
            <div className={styles.detailsJobInfo}>
              <h2>About company</h2>
              <p>{jobInfo.aboutCompany}</p>
            </div>
            <div className={styles.detailsJobInfo}>
              <h2>About the job/internship</h2>
              <p>
                We are looking for a responsible PHP/WordPress/Laravel/Shopify
                Developer. He/She will be liable for managing services and
                therefore the interchange of knowledge between the server and
                the users. The candidate's primary focus is going to be the
                event of all server-side logic, definition, and maintenance of
                the central database and ensuring high performance and
                responsiveness to requests from the front end. Selected intern's
                day-to-day responsibilities include: 1. Work on the development
                of theme customization, liquid programming language, and
                corresponding apps 2. Implement system integrations that are
                crucial to our success 3. Contribute to the development of
                HTML5/CSS/JavaScript and standard web technologies integral to
                building seamless multi-channel experiences 4. Work on speed
                optimization and making a mobile-friendly website
              </p>
            </div>
            <div className={styles.detailsJobInfo}>
              <h2>Skill(s) required</h2>
              {skill.map((item) => (
                <span key={item} className={styles.detailsJobSkills}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.detailsJobInfo}>
              <h2>Additional Information</h2>
              <p>Hare Krishna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
