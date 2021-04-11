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
            <h1 className={ styles.title }  style={{ opacity: showMessage? "1" : "0" }}>We look forward to celebrating with you.</h1>
        </div>
    )
}

export default ConfitmationPage
