import React, { useState, useEffect } from 'react'
import styles from '../Styles/ConfimationPage.module.css'

const ConfitmationPage = () => {
    const [showMessage, setShowMessage] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true)
        }, 2000)
    },[])

    return (
        <div className={ styles.titleContainer }>
            <h2 className={ styles.title }  style={{ opacity: showMessage? "1" : "0" }}>We look forward to celebrating with you. We will send you and email with more details soon.</h2>
        </div>
    )
}

export default ConfitmationPage
