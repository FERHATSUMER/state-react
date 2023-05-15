import React from 'react'
import Bmw from './images/Bmw.jpg'
import Camaro from './images/Camaro.jpg'
import Ferrari from './images/Ferrari.jpg'
import Fiat from './images/Fiat.jpg'
import Honda from './images/Honda.jpg'
import Mercedes from './images/Mercedes.jpg'
import Nissan from './images/Nissan.jpg'
import Pejo from './images/Pejo.jpg'
import Togg from './images/Togg.jpg'
import './course.css'


const courseMap={
  Bmw,
  Camaro,
  Ferrari,
  Fiat,
  Honda,
  Mercedes,
  Nissan,
  Pejo,
  Togg
}

function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;