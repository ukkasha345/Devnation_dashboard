import React, { useState } from "react";
import styles from "./style.module.css";
function Item({ title, duration, topics }) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div
      className={styles.itemContainer}
      style={
        isExpanded
          ? { border: "1px rgb(222, 222, 222) solid", borderRadius: "5px" }
          : {}
      }
    >
      <p
        className={styles.closedTag}
        style={
          isExpanded
            ? {
                backgroundColor: "rgb(236, 247, 252)",
                color: "blue",
                border: "none",
              }
            : {}
        }
        onClick={() => setExpanded(!isExpanded)}
      >
        {title}
      </p>
      <div
        className={styles.expandedTab}
        style={isExpanded ? { display: "block" } : { display: "none" }}
      >
        <span>Duration: {duration} weeks</span>
        <br />
        {topics.map((topic, index) => {
          return (
            <div className={styles.topic} key={index}>
              <img src="/images/tick.png" />
              <p>{topic}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Item;
