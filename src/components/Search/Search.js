import React from "react";
// eslint-disable-next-line
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input placeholder="Find user" className={styles.input} type="text" />
      </div>
      <div className={styles.userChat}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className={styles.userChatInfo}>
          <span>Name</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
