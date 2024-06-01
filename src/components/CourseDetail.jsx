import React, { useState } from 'react';
import './CourseDetail.css';

const CourseDetail = ({ course }) => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [syllabusVisible, setSyllabusVisible] = useState(false);

  const toggleWeek = (index) => {
    setExpandedWeek(expandedWeek === index ? null : index);
  };

  const toggleSyllabusVisibility = () => {
    setSyllabusVisible(!syllabusVisible);
  };

  return (
    <div className="course-detail">
      <img src={course.thumbnail} alt="course thumbnail"></img>
      <h1>{course.name}</h1>
      <h2>Instructor : {course.instructor}</h2>
      <p>{course.description}</p>
      <p>Number of people who loved this course: <span className='spanEle'>{course.likes}</span></p>
      <p>Status: <span className='spanEle'>{course.enrollmentStatus}</span></p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: <span className='spanEle'>{course.location}</span></p>
      <p>Pre-requisites: {course.prerequisites.join(', ')}</p>
      <div>
        <h3 onClick={toggleSyllabusVisibility} style={{ cursor: 'pointer' }}>
          Syllabus {syllabusVisible ? '▲' : '▼'}
        </h3>
        {syllabusVisible && (
          <div>
            {course.syllabus.map((week, index) => (
              <div key={index}>
                <h4 onClick={() => toggleWeek(index)} style={{ cursor: 'pointer' }}>
                  Week {week.week}: {week.topic}
                </h4>
                {expandedWeek === index && <p>{week.content}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
