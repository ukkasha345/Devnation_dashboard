import "./Recording.css";
import React, { useEffect, useState } from "react";
// import calender from 'calender.png'
function Recording() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch("#")
      //ttp://localhost:5001/devnation-asia-app-6ec09/asia-southeast1/user/recordings/getAll/Np92AJy9c53bMjcrUMmm
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
    <div className="main">
      <h3>LECTURE RECORDINGS</h3>
      <p>
        You will get access to the recordings after each class. All recordings
        will be listed here.
      </p>
      <table className="record">
        <thead>
          <th>
            <h5>VIDEO TITLE</h5>
          </th>
          <th>
            <h5>INSTRUCTOR NAME</h5>
          </th>
          <th>
            <h5>DATE</h5>
          </th>
          <th>
            <span style={{ color: "#f2f2f2 " }}>mmmmmmm</span>
          </th>
        </thead>
      </table>
      {user.map((data, index) => (
        <div key={index.id}>
          <div className="oop">
            <table className="record">
              <tbody>
                <tr>
                  <td id="link" className="links">
                    {" "}
                    <a href={data.videoUid} target="_blank">
                      {data.videoTitle}
                    </a>
                  </td>
                  <td>{data.instructorName}</td>
                  <td>{data.date}</td>
                  <td className="links">
                    <a href={data.videoUid} target="_blank">
                      <b>Watch Recording</b>{" "}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recording;
