import React from "react";
// eslint-disable-next-line
import styles from "./Message.module.css";

const Message = () => {
  return (
    <div className={`${styles.message} ${styles.owner}`}>
      <div className={styles.messageInfo}>
        <img
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className={styles.messageContent}>
        <p className={styles.p}>Hello</p>
        <img
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
