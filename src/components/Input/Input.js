import React from "react";
// eslint-disable-next-line
import styles from "./Input.module.css";

import { images } from "../../images";

const Input = () => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Message" />
      <div className={styles.send}>
        <img src={images.attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={images.img} alt="" />
        </label>
        <button className={styles.button}>Send</button>
      </div>
    </div>
  );
};

export default Input;
