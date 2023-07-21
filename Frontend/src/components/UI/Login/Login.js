import React from 'react'
import styles from './Login.module.css';

const Login = () => {

    const googleAuth = () => {
        window.open(`https://genletter-pa28.onrender.com/auth/google/callback`, "_self");
    }

    return (
        <div className={styles.form}>
        <div className={styles.title}>Authentication</div>
            <button className={styles.btn} onClick={googleAuth}>Sign in with Google</button>
        </div>
    )
}

export default Login