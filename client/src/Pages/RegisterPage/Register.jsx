import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apis/auth";
import jobImage from '../../assets/pics/jobFinderPic.png'

const Register = () => {
    const Navigate = useNavigate();
    const [newUser, setNewUser] = useState({});
    const handleChange = (e)=>{
      setNewUser({
        ...newUser,
        [e.target.name]:e.target.value,
      })
    };
    const handleSignUp = async()=>{
      if(!(Object.keys(newUser).length===0)){
        const userDetails = await RegisterUser(newUser);
        console.log(userDetails);
        localStorage.setItem('UserName',userDetails.data.recruiterName);
        localStorage.setItem('UserToken',userDetails.data.token);
      }
      else console.log('Couldnt register the User');
    }
  return (
    <>
      <div className={styles.Register}>
        <div className={styles.RegisterLeft}>
          <div>
            <div>
              <p>Create an account</p>
              <p>Your personal job finder is here</p>
            </div>
            <div>
              <div>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
              </div>
              <div>
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
              </div>
              <div>
                <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange}/>
              </div>
              <div>
                <input type="text" name="password" placeholder="Password" onChange={handleChange}/>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <p>
                By creating an account, I agree to our terms of use and privacy
                policy
              </p>
            </div>
            <div>
              <button onClick={handleSignUp}>Create Account</button>
              <p>Already have an account? </p>
              <span onClick={()=>Navigate('/Login')}>Sign In</span>
            </div>
          </div>
        </div>

        <div className={styles.RegisterRight}>
          <p>Your Personal Job Finder</p>
          <img src={jobImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
