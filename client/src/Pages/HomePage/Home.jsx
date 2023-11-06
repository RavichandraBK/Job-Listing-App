import React, { useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import styles from "./Home.module.css";
import searchIcon from "../../assets/icons/searchIcon.svg";

const Home = () => {
  const [skillArr, setSkillArr] = useState([]);

  const handleSkills = (e) => {
    setSkillArr([...skillArr, e.target.value]);
  };

  const handleCancel = (indx)=>{
    console.log(indx)
    skillArr.splice(indx,1);
    setSkillArr([...skillArr]);
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className={styles.homeSearch}>
          <img src={searchIcon} alt="" />
          <input type="text" name="" id="" placeholder="Type any job title" />
          <div className={styles.homeSkills}>
            <select onChange={handleSkills} name="" id="">
              <option>Hare Krishna</option>
              <option>Haribol Hari Hari</option>
              <option>Haribol</option>
            </select>
            {skillArr.map((item, index) =>(

                <div key={index} className={styles.homeSkillItem}>
                  <p>Haribol</p>
                  {/* {console.log(index)} */}
                  <span onClick={()=>{handleCancel(index)}}>X</span>
                </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
