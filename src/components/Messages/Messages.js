import React from "react";
// eslint-disable-next-line
import styles from "./Messages.module.css";
import { Message } from "../../components";

const Messages = () => {
  return (
    <div className={styles.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
