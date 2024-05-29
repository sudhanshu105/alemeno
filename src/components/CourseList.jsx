import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const CourseList = ({ courses }) => (
  <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
);

export default CourseList;