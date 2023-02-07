import React from 'react';
import './StudentList.css';
function StudentList(props) {
  const { title, name, email } = props;
  return (
      <div className="stu-info">
        <div>
          <div className='name'>{name}  <span className="items">{title} </span></div>
          <div className='email'>{email}</div>
        </div>
        <div className='profile'>
          <img className="profile-img" src="/images/student-profile.png" alt="" />
        </div>
      </div>
  )
}

export default StudentList;