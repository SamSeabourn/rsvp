import React from 'react'
import crest from '../Images/wedding-crest.png'
import styles from '../Styles/Images.module.css'

export const MainImage = (): JSX.Element => {
    return(
        <div className={styles.container}>
            <br></br>
            <img className="main-image" src={crest} alt="Caity and Sams wedding!"/> 
        </div> 
    )
}

export default MainImage;