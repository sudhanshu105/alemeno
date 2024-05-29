import React from 'react';
import { useSelector } from 'react-redux';

const StudentDashboard = () => {
  const enrolledCourses = useSelector(state => state.courses.enrolledCourses);

  return (
    <div className="student-dashboard">
      <h1>My Enrolled Courses</h1>
      <div className="course-list">
        {enrolledCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
            {/* Add additional course details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
