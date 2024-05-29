import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <div className='courseCont'>
    <img src={course.thumbnail} alt="course Thumbnail" />
    <Link to={`/course/${course.id}`}><h3>{course.name}</h3></Link>
    <p>By : {course.instructor}</p>
    <div className='details'>
    <Link to={`/course/${course.id}`}>View Details</Link></div>
  </div>
  </div>
);

export default CourseCard;
