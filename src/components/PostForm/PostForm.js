import react, { useState } from "react";
import styles from "./PostForm.module.scss";

const PostForm = ({ label }) => {
  const handleText = (e) => {};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("boo!");
      }}
      className={styles.form}
    >
      <textarea name="text" className={styles.formContent}></textarea>
      <button className={styles.formButton}>
        <p>{label}</p>
      </button>
    </form>
  );
};

export default PostForm;
