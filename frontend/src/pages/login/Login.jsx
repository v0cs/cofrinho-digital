import React from 'react'
import FormLogin from '../../components/FormLogin'
import styles from '../login/Login.module.css'

function Login() {
  return (
    <div className={styles.body}>
        <FormLogin/>
    </div>
  )
}

export default Login