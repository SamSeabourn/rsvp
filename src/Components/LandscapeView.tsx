import React from "react";
import styles from "../Styles/LandscapeView.module.css";
import MainImage from "./MainImage";
import StyledInput from "./StyledInput";
import saveTheDate from "../Images/save_the_date.svg";

interface Props  {
  setIsConfirmed: any
}

export const LandscapeView = ({setIsConfirmed}: Props): JSX.Element => {
  
  const handleSubmit = () => {
    setIsConfirmed(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.wrapper}>
          <MainImage />
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <img
              style={{ width: "90%" }}
              src={saveTheDate}
              alt="Caity and Sams wedding!"
            />
            <h1>September 18 2021</h1>
            <div style={{ height: "20px" }} />
            <StyledInput type="text" placeholder="Fullname" />
            <div style={{ height: "10px" }} />
            <StyledInput type="email" placeholder="Your Email" />
            <div style={{ height: "10px" }} />
            <StyledInput type="text" placeholder="Any dietary requrements? " />
            <div style={{ height: "20px" }} />
            <button onClick={ handleSubmit }> RSVP </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeView;
