import React from 'react'
import styles from '../Styles/Background.module.css'

export const Background = ({ children }: any): JSX.Element => {
    return (
        <div className={styles.background}>
            <div className={styles.card}>
                { children }
            </div>
        </div>
    )
}

export default Background;
