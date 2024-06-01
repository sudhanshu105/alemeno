import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course, onLike }) => (
  <div className="course-card">
    <div className='courseCont'>
      <Link to={`/course/${course.id}`}><img src={course.thumbnail} alt="course Thumbnail" /></Link>
      <Link to={`/course/${course.id}`}><h3>{course.name}</h3></Link>
      <p>By : {course.instructor}</p>
      <p className='like'>{course.likes} People loved this course </p>
      <div className='like_info'> <span className='smallchar'> loved this course?? give it a like here : </span>
        <div className="heart" onClick={() => onLike(course.id, !course.liked)}>
          {course.liked ? '❤️' : '🤍'}
        </div></div> <hr /><div className='details'>
        <Link to={`/course/${course.id}`}>View Details</Link>
      </div>
    </div>
  </div>
);

export default CourseCard;
