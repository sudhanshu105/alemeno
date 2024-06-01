import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardCard.css';

const DashboardCard = ({ course }) => {
    console.log(course.progress);

    return (
        <div className="dash-card">
            <div className='dashCont'>
                <Link to={`/course/${course.id}`}><img src={course.thumbnail} alt="course Thumbnail" /></Link>
                <Link to={`/course/${course.id}`}><h3>{course.name}</h3></Link>
                <p>By : {course.instructor}</p>

                <p>Due Date: {course.dueDate}</p>
                <p className='single_line'>Progress:
                    <div className="progress-bar">
                        <div className='select' style={{ width: `${course.progress}%` }}></div>
                    </div></p>
                <h3 className={(course.progress === 100) ? 'open' : 'close'}>Course Completed</h3>
                <div className={(course.progress === 100) ? 'close' : 'open'}>
                    <input type='checkbox' />Mark as completed
                </div><br />


                <div className='details'>
                    <Link to={`/course/${course.id}`}>View Details</Link></div>
            </div>
        </div>
    )
};

export default DashboardCard;
