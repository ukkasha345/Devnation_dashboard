import React, { useEffect, useState } from "react";
import Child from "./Child";

import "./fulldesign.css";

const Dashboard = () => {
  const [attendance, setAttendance] = useState(100);
  const objs = [
    { id: 1, Name: "Ukkasha", RegNo: 85, Education: "Bachlors" },
    { id: 1, Name: "Fahad", RegNo: 110, Education: "Bachlors" },
  ];

  const userDetails = { Attendence: 11 };

  function AttendenceTile(props) {
    const { atnd } = props;
    return (
      <div style={{ fontSize: "13px", fontWeight: 600 }}>
        <p>Your Attendence</p>
        <p>
          <span className="atndSpan">
            <span style={{ color: "black" }}>{atnd}</span>
          </span>
          out of 18
        </p>
      </div>
    );
  }

  return (
    <div className="paretnDv">
      <h3>YOUR LIVE LECTURES</h3>

      <div className="LiveClasses">
     
<Child/>
</div>
      <h3 style={{ marginTop: 15 }}>YOUR PROGRESS</h3>
      <div className="progress-bar">
        <hr style={{ width: attendance + "%" }} />
        <p>{attendance}%</p>
      </div>

      <h3 style={{ marginTop: 15 }}>YOUR STATS</h3>

      <div className="attendance-container">
        <img
          src="/images/white-profile-icon.png"
          alt="Hello world"
          className="attendance-icon"
        />
        <AttendenceTile atnd={userDetails.Attendence} />
      </div>
    </div>
  );
};

export default Dashboard;
