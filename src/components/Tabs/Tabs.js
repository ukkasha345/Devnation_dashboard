import React, { useState } from "react";
import "./style.css";
//Importing Tabs
import Assignment from "../Assignment/Assignment";
import Dashboard from "../Dashboard/Dashboard";
import Recording from "../Recording/Recording";
import Syllabus from "../Syllabus/Syllabus";
import Students from "../Students/Students";
function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="container">
      <div className="tab-btns">
        <div
          onClick={() => setActiveTab(1)}
          style={
            activeTab === 1
              ? {
                  borderBottom: "3px rgba(99,102,241,0.5) solid",
                  color: "rgb(99,102,241)",
                }
              : {}
          }
        >
          Dashboard
        </div>
        <div
          onClick={() => setActiveTab(2)}
          style={
            activeTab === 2
              ? {
                  borderBottom: "3px rgba(99,102,241,0.5) solid",
                  color: "rgb(99,102,241)",
                }
              : {}
          }
        >
          Recordings
        </div>
        <div
          onClick={() => setActiveTab(3)}
          style={
            activeTab === 3
              ? {
                  borderBottom: "3px rgba(99,102,241,0.5) solid",
                  color: "rgb(99,102,241)",
                }
              : {}
          }
        >
          Assignments
        </div>
        <div
          onClick={() => setActiveTab(4)}
          style={
            activeTab === 4
              ? {
                  borderBottom: "3px rgba(99,102,241,0.5) solid",
                  color: "rgb(99,102,241)",
                }
              : {}
          }
        >
          Students
        </div>
        <div
          onClick={() => setActiveTab(5)}
          style={
            activeTab === 5
              ? {
                  borderBottom: "3px rgba(99,102,241,0.5) solid",
                  color: "rgb(99,102,241)",
                }
              : {}
          }
        >
          Syllabus
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Dashboard />}
        {activeTab === 2 && <Recording />}
        {activeTab === 3 && <Assignment />}
        {activeTab === 4 && <Students />}
        {activeTab === 5 && <Syllabus />}
      </div>
    </div>
  );
}

export default Tabs;
