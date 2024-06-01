import React from 'react';
import { useSelector } from 'react-redux';
import DashboardCard from './DashboardCard';
import './StudentDashboard.css';

const StudentDashboard = () => {

  const name = useSelector(state => state.courses.namestudent);  // Name of the student is fetched
  const enrolledCourses = useSelector(state => state.courses.enrolledCourses); //Courses in which this particular student is fetched

  return (
    <div className="student-dashboard">
      <h1>My Enrolled Courses</h1>
      <h3 >Student Name : <span className='naming'> {name} </span></h3>
      <div className="dashboard-list">
        {enrolledCourses.map(course => (
          <DashboardCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
