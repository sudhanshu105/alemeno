import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../api';
import { setCourses, likeCourse } from '../store/actions';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';
import './CourseListingPage.css';
import PopularList from '../components/PopularList';
import { useTypewriter } from 'react-simple-typewriter';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    const loadCourses = async () => {
      const courses = await fetchCourses();
      dispatch(setCourses(courses));
      setFilteredCourses(courses);
    };

    loadCourses();
  }, [dispatch]);

  const handleSearch = (query) => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleLike = async (courseId) => {
    const response = await fetch(`http://localhost:5000/courses/${courseId}/like`, {
      method: 'POST',
    });
    if (response.ok) {
      dispatch(likeCourse(courseId));
    }
  };

  const [text] = useTypewriter({
    words: ['Coursify'],
  })

  return (
    <div className="course-listing-page">
      <div className='info'>
        <div className='text'>

          <h1>Welcome to <span class="highlight">{text}</span></h1>

          <p>Your one stop solution to all your educational needs</p>
        </div>
        <img className='heroImg' alt="mainImg" src='/instruct.webp' />
      </div>
      <br />
      <div className="search">
        <h2>Explore All Available Courses!</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="explore">
        <div className="courseBox">
          <CourseList courses={filteredCourses} onLike={handleLike} />
        </div>
      </div>
      <div className="explore">
        <h2>Most Popular Courses!</h2>
        <div className="courseBox">
          <PopularList courses={courses} onLike={handleLike} />
        </div>
      </div>
    </div>
  );
};

export default CourseListingPage;
