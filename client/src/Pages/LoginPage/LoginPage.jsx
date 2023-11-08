import React from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jobImage from '../../assets/pics/jobFinderPic.png'
import { Login} from '../../apis/auth'

const LoginPage = () => {
  const Navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({});

  const handleChange = (e)=>{
    setUserLogin({
      ...userLogin,
      [e.target.name]:e.target.value,
    })
  }

  const handleSignIn = async()=>{
    const userDetails = await Login(userLogin);
    // console.log(userDetails);
    if(userDetails){
      localStorage.setItem('UserName',userDetails.data.recruiterName);
      localStorage.setItem('UserToken',userDetails.data.token);
    }
    else{
      console.log('Couldnt fetch data from backend');
    }
  }

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.LoginLeft}>
          <div>
            <div>
              <p>Already have an account?</p>
              <p>Your personal job finder is here</p>
            </div>
            <div>
              <div>
                <input name="email" type="text" placeholder="Email" onChange={handleChange}/>
              </div>
              <div>
                <input name="password" type="text" placeholder="Password" onChange={handleChange}/>
              </div>
            </div>
            <div>
              <button onClick={handleSignIn}>Sign in</button>
              <p>Don’t have an account? </p><span onClick={()=>Navigate('/Register')}>Sign Up</span>
            </div>
          </div>
        </div>

        <div className={styles.LoginRight}>
          <p>Your Personal Job Finder</p>
          <img src={jobImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
