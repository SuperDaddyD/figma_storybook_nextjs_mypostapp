import styles from "./Post.module.scss";
// import heart from "../../assets/images/heart.svg";
// import share from "../../assets/images/share.svg";
// import test from "../../assets/images/test.svg";
// import { Share } from "@/assets/images";
import Fox from "../../assets/images/fox.svg";
import Heart from "../../assets/images/heart.svg";
import { useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const Post = ({ content, date }) => {
  // const [count, setCount] = useState(0);
  // const counter = () => {
  //   setCount((prev) => prev + 1);
  // };
  return (
    <>
      <div>
        <p className={styles.postsContent}>{content}</p>

        <ul className={styles.postsMeta}>
          <li className={styles.postsMetaData}>
            <FaHeart />
            <span>0</span>
          </li>
          <li className={styles.postsMetaData}>
            <FaShareAlt />
            <span>Share</span>
          </li>
          <li>
            <p className={styles.postsMetaData}>{date}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Post;
