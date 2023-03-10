import React from "react";
// eslint-disable-next-line
import styles from "./Chat.module.css";

import { images } from "../../images";
import { Input, Messages } from "../../components";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>Name</span>
        <div className={styles.chatIcons}>
          <img src={images.cam} alt="cam" />
          <img src={images.add} alt="add" />
          <img src={images.more} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
