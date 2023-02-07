import React from "react";
import Item from "./Item";
import styles from "./style.module.css";
import { data } from "./data";
function Syllabus() {
  return (
    <div className={styles.container}>
      {data.map((obj, index) => {
        return (
          <Item
            key={index}
            title={obj.title}
            duration={obj.duration}
            topics={obj.topics}
          />
        );
      })}
    </div>
  );
}

export default Syllabus;
