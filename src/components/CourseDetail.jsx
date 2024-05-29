import React from 'react';
import './CourseDetail.css';

const CourseDetail = ({ course }) => (
  <div className="course-detail">
    <img src={course.thumbnail} alt="course thumbnail"></img>
    <h1>{course.name}</h1>
    <h2>{course.instructor}</h2>
    <p>{course.description}</p>
    <p>Status: {course.enrollmentStatus}</p>
    <p>Duration: {course.duration}</p>
    <p>Schedule: {course.schedule}</p>
    <p>Location: {course.location}</p>
    <p>Pre-requisites: {course.prerequisites.join(', ')}</p>
    <div>
      <h3>Syllabus</h3>
      {course.syllabus.map((week, index) => (
        <div key={index}>
          <h4>Week {week.week}: {week.topic}</h4>
          <p>{week.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CourseDetail;
