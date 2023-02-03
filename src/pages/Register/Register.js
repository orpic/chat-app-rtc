import React from "react";

import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Working Chat APP</span>
        <span className={styles.title}>Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src="" />
            ded
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an account? Log In </p>
      </div>
    </div>
  );
};

export default Register;
