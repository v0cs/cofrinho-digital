import React from 'react'
import FormLogin from '../../components/FormLogin'
import styles from '../login/Login.module.css'
import action from './action.js'

function Login() {
  return (
    <div>
      <section className={styles.sectionLeft}>
        <h1>Bem vindo</h1>
      </section>
      <section className={styles.sectionRight}>
        <h1>Login</h1>
        <FormLogin onFinish={action.onFinish}/>
      </section>
    </div>
  )
}

export default Login