import React, { useEffect, useState } from "react";
import "./fulldesign.css";
import "./child.css";
export default function Child() {
  const [user, setUser] = useState([]);
  const instructor = "Hamd Bilal Tahir";
  const fetchData = () => {
    //http://localhost:5001/devnation-asia-app-6ec09/asia-southeast1/user/liveSessions/getAll/4apSW5zxhQIUoAZqmMdi
    fetch("@")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    // <div className="childiv">
    <div className="parentClass">
      {user.map((data, index) => (
        <div key={index.id}>
          <div id="oop">
            <img src="/images/calender.png" alt="" />
            {data.startDate} @ {data.startTime}PM
            <h3>{data.meetingLabel}</h3>
            <div className="instructor">
              Instructor:
              <h3>
                {instructor} | {data.instructorName}
              </h3>
              {data.instructorRole}
            </div>
            <span>Upcoming</span>
          </div>
        </div>
      ))}
    </div>

    // </div>
  );
}
