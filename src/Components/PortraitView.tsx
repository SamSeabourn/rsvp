import React from "react";
import styles from "../Styles/LandscapeView.module.css";
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
        <div style={{textAlign: "center"}}>
          <img
            style={{ width: "70%" }}
            src={saveTheDate}
            alt="Caity and Sams wedding!"
          />
        <div style={{ height: "20px" }} />
          <h1>September 18 2021</h1>
          <div style={{ height: "20px" }} />
          <StyledInput type="text" placeholder="Fullname" />
          <div style={{ height: "10px" }} />
          <StyledInput type="email" placeholder="Your Email" />
          <div style={{ height: "10px" }} />
          <StyledInput type="text" placeholder="Any dietary requrements? " />
          <div style={{ height: "20px" }} />
          <button> RSVP </button>
        </div>
      </div>
    </div>
  );
};

export default PortraitView;
