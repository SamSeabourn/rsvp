import React, { useState, useEffect } from "react";
import { ALREADY_RSVP } from "../Constants";
import styles from "../Styles/ConfimationPage.module.css";

const RSVPAlready = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title} style={{ opacity: showMessage ? "1" : "0" }}>
        {ALREADY_RSVP}
      </h2>
    </div>
  );
};

export default RSVPAlready;
