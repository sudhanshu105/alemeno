import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../api';
import { setCourses } from '../store/actions';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';
import './CourseListingPage.css';
import PopularList from '../components/PopularList';

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

  return (
    <div className="course-listing-page">

      <div className='info'>
        <div className='text'>
        <h1>Welcome to Coursify</h1>
        <p>Your one stop solution to all your educational needs</p></div>
        <img className='heroImg' alt="mainImg" src='/hero.jpg' />
      </div>
      <div className="search">
      <SearchBar onSearch={handleSearch} /></div>

      <div className="explore">
        <h2>Explore All Courses!</h2>
        <div className="courseBox">
      <CourseList courses={filteredCourses} />
      </div>
      </div>

      <div className="explore">
        <h2>Most Popular Courses!</h2>
        <div className="courseBox">
      <PopularList courses={courses} />
      </div>
      </div>

    </div>
  );
};

export default CourseListingPage;
