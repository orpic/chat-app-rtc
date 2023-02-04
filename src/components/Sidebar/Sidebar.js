import React from "react";
// eslint-disable-next-line
import styles from "./Sidebar.module.css";
import { Chats, Navbar, Search } from "../../components";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Search />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
    </div>
  );
};

export default Sidebar;
