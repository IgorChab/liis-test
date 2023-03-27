import React from 'react'

import { LoginForm } from '../../components/LoginForm/LoginForm'

import styles from './LoginPage.module.css'

export const LoginPage = () => {
    return (
        <>
            <div className={styles.picture}></div>
            <div className={styles.container}>
                <LoginForm/>
            </div>
        </>
    )
}
