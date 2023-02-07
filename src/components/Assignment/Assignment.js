import React from "react";
import styles from "./style.module.css";
function Assignment() {
  return (
    <div className={styles.container}>
      <h3>YOUR ASSIGNMENTS & PROJECTS</h3>
      <p>
        These projects are designed to make you a solid developer. Make sure to
        complete them all on time!
      </p>
      <span>No assignment for this video</span>
    </div>
  );
}
export default Assignment;
