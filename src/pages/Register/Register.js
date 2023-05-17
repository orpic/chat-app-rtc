import React, { useState } from "react";

import styles from "./Register.module.css";

import { images } from "../../images";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile((await res).user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(true);
    }
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
          {error && <span>Something went wrong</span>}
        </form>
        <p className={styles.p}>Have an account? Log In </p>
      </div>
    </div>
  );
};

export default Register;
