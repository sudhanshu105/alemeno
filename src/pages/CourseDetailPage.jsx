import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../api';
import CourseDetail from '../components/CourseDetail';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      const course = await fetchCourseById(id);
      setCourse(course);
    };

    loadCourse();
  }, [id]);

  return (
    <div className="course-detail-page">
      {course ? <CourseDetail course={course} /> : <p>Course not found</p>}
    </div>
  );
};

export default CourseDetailPage;
