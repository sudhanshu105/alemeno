import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardCard.css';

const DashboardCard = ({ course }) => {

    const [progress, setProgress] = useState(course.progress);
    console.log(course.progress);

    const handleCheckboxChange = () => {
        const newProgress = 100; // Set progress to 100 when checkbox is clicked
        setProgress(newProgress);
    }

    return (
        <div className="dash-card">
            <div className='dashCont'>
                <Link to={`/course/${course.id}`}><img src={course.thumbnail} alt="course Thumbnail" /></Link>
                <Link to={`/course/${course.id}`}><h3>{course.name}</h3></Link>
                <p>By : {course.instructor}</p>

                <p>Due Date: {course.dueDate}</p>
                <p className='single_line'>Progress:
                    <div className="progress-bar">
                        <div className='select' style={{ width: `${progress}%` }}></div>
                    </div></p>
                <h3 className={(progress === 100) ? 'open' : 'close'}>Course Completed</h3>
                <div className={(progress === 100) ? 'close' : 'open'}>
                    <input type='checkbox' checked={progress === 100} onChange={handleCheckboxChange} />Mark as completed
                </div><br />
                <div className='details'>
                    <Link to={`/course/${course.id}`}>View Course Details</Link></div>
            </div>
        </div>
    )
};

export default DashboardCard;

