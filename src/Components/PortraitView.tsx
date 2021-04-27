import React from "react";
import styles from "../Styles/PortraitView.module.css";
import MainImage from "./MainImage";
import StyledInput from "./StyledInput";
import saveTheDate from "../Images/save_the_date.svg";

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
          <h1 className={styles.date}>September 18 2021 Sydney</h1>
          <div style={{ height: "30px" }} />
          <StyledInput type="text" placeholder="Full Name" formId="fullname" />
          <div style={{ height: "10px" }} />
          <StyledInput type="email" placeholder="Your Email" formId="email" />
          <div style={{ height: "10px" }} />
          <StyledInput
            type="text"
            placeholder="Any dietary requirements?"
            formId="diet"
          />
          <div style={{ height: "10px" }} />
          <button
            className={styles.submit}
          >
            {" "}
            RSVP{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortraitView;
