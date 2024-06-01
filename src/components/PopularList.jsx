import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const PopularList = ({ courses }) => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const filteredCourses = courses.filter(course => course.id % 3 === 0);
    const storedLikes = JSON.parse(localStorage.getItem('likedCourses')) || {};
    const updatedCourses = filteredCourses.map(course => ({
      ...course,
      liked: !!storedLikes[course.id],
      likes: course.likes + (storedLikes[course.id] ? 1 : 0)
    }));
    setCourseList(updatedCourses);
  }, [courses]);

  const handleLike = (courseId, liked) => {
    const updatedCourses = courseList.map(course =>
      course.id === courseId ? { ...course, likes: liked ? course.likes + 1 : course.likes - 1, liked } : course
    );
    setCourseList(updatedCourses);

    const storedLikes = JSON.parse(localStorage.getItem('likedCourses')) || {};
    if (liked) {
      storedLikes[courseId] = true;
    } else {
      delete storedLikes[courseId];
    }
    localStorage.setItem('likedCourses', JSON.stringify(storedLikes));

    //  API Update
    fetch(`http://localhost:5000/courses/${courseId}/like`, {
      method: liked ? 'POST' : 'DELETE',
    });
  };

  return (
    <div className="course-list">
      {courseList.length > 0 ? (
        courseList.map(course => (
          <CourseCard key={course.id} course={course} onLike={handleLike} />
        ))
      ) : (
        <p>No popular courses found.</p>
      )}
    </div>
  );
};

export default PopularList;
