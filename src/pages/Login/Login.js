import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Working Chat APP</span>
        <span className={styles.title}>Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Sign Up </p>
      </div>
    </div>
  );
};

export default Login;
