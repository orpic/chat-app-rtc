import React from "react";

import styles from "./Register.module.css";

import { images } from "../../images";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Working Chat APP</span>
        <span className={styles.title}>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label className={styles.label} htmlFor="file">
            <img src={images.addAvatar} alt="add" />
            <span>Add a profile picture</span>
          </label>
          <button className={styles.button}>Sign Up</button>
        </form>
        <p className={styles.p}>Have an account? Log In </p>
      </div>
    </div>
  );
};

export default Register;
