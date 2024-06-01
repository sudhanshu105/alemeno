import React from 'react';
import { useSelector } from 'react-redux';
import DashboardCard from './DashboardCard';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const name = useSelector(state => state.courses.namestudent);  // Name of the student is fetched
  const enrolledCourses = useSelector(state => state.courses.enrolledCourses); // Courses in which this particular student is fetched
  const studentId = useSelector(state => state.courses.studentId); 

  return (
    <div className="student-dashboard">
      
      <h3>Student Details <br /> <br /> <span className='stuInfo'> Name: <span className='naming'>{name}</span>  <br /> Student ID :  <span className='naming'>{studentId}</span> </span></h3>
      <h1>My Enrolled Courses</h1>
      <div className="dashboard-list">

        {enrolledCourses.map(course => (
          <DashboardCard key={course.id} course={course} studentId={studentId} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
