import React from 'react';
import StudentList from './StudentList';
import './Students.css';
import {data} from "./data";
function Students() {
  return (
    <div className='listt'>
       {data.map((student,index)=>{
          return <StudentList key={index} title={student.title} name={student.name} email={student.email} />   
        })}
    </div>
  )
}

export default Students;
