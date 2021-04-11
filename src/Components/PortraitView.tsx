import React from "react";
import styles from "../Styles/PortraitView.module.css";
import MainImage from "./MainImage";
import StyledInput from "./StyledInput";
import saveTheDate from "../Images/save_the_date.svg";

interface Props  {
  setIsConfirmed: any
}

export const PortraitView = ({setIsConfirmed}: Props) => {

  const handleSubmit = () => {
    setIsConfirmed(true)
  }

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
        <div style={{ height: "10px" }} />
          <h1 className={ styles.date } >September 18 2021</h1>
          <div style={{ height: "10px" }} />
          <StyledInput type="text" placeholder="Fullname" inputStyles={ styles.input }/>
          <div style={{ height: "10px" }} />
          <StyledInput type="email" placeholder="Your Email" inputStyles={ styles.input }/>
          <div style={{ height: "10px" }} />
          <StyledInput type="text" placeholder="Any dietary requrements?"  inputStyles={ styles.input }/>
          <div style={{ height: "10px" }} />
          <button onClick={ handleSubmit } className={ styles.submit }> RSVP </button>
        </div>
      </div>
    </div>
  );
};

export default PortraitView;
