import React from "react";
import styles from "../Styles/PortraitView.module.css";
import MainImage from "./MainImage";
import StyledInput from "./StyledInput";
import saveTheDate from "../Images/save_the_date.svg";
import {
  DIETARY_REQUIREMENTS,
  EMAIL,
  FULLNAME,
  LOCATION,
  RSVP,
} from "../Constants";

export const PortraitView = () => {
  return (
    <div>
      <div>
        <MainImage />
      </div>
      <br></br>
      <div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "70%" }}
            src={saveTheDate}
            alt="Caity and Sams wedding!"
          />
          <div style={{ height: "10px" }} />
          <h1 className={styles.date}>{LOCATION}</h1>
          <div style={{ height: "30px" }} />
          <StyledInput type="text" placeholder={FULLNAME} formId="fullname" />
          <div style={{ height: "10px" }} />
          <StyledInput type="email" placeholder={EMAIL} formId="email" />
          <div style={{ height: "10px" }} />
          <StyledInput
            type="text"
            placeholder={DIETARY_REQUIREMENTS}
            formId="diet"
          />
          <div style={{ height: "10px" }} />
          <button className={styles.submit}>{RSVP}</button>
        </div>
      </div>
    </div>
  );
};

export default PortraitView;
