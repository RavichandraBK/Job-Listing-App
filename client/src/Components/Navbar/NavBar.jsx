import React from "react";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dzn1 from "../../assets/icons/Dzn1.png";
import Dzn2 from "../../assets/icons/Dzn2.svg";
import Dzn3 from "../../assets/icons/Dzn3.svg";
import DP from "../../assets/icons/DPLogo.png";
const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('UserToken'));
  // const chkLogin = ;

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navText}>
          <div className={styles.navDzn1}>
            <img src={Dzn1} alt="" />
          </div>
          <img className={styles.navDzn2} src={Dzn2} alt="" />
          <img className={styles.navDzn3} src={Dzn3} alt="" />
          <p>Jobfinder</p>
          <div>
            {loggedIn ? (
              <>
                <p>Logout</p>
                <p>Hello! Recruiter</p>
                <span>
                  <img src={DP} alt="" />
                </span>
              </>
            ) : (
              <>
                <Link to="/">
                  <button className={styles.navBtn1}>Login</button>
                </Link>
                <Link to="/Register">
                  <button className={styles.navBtn2}>Register</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
