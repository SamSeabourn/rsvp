import React, { useState, useEffect } from "react";
import { CONFIRMATION_MESSAGE } from "../Constants";
import styles from "../Styles/ConfimationPage.module.css";

const ConfirmationPage = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title} style={{ opacity: showMessage ? "1" : "0" }}>
        {CONFIRMATION_MESSAGE}
      </h2>
    </div>
  );
};

export default ConfirmationPage;
