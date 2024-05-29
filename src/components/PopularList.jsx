import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const PopularList = ({ courses }) => {
  const filteredCourses = courses.filter(course => course.id % 3 === 0);

  return (
    <div className="course-list">
      {filteredCourses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default PopularList;
