import React from 'react';
import { Link } from 'react-router-dom'

import courseImg1 from '../../assets/images/course/1.png';

const SingleCourse = (props) => {
    const { itemClass, courseID, courseImg, courseTitle, courseDescription } = props;
	return(
        <div className={itemClass ? itemClass : 'course__item mb-30'}>
            <div className="course__thumb">
                <Link to={`/course/${courseID}`}>
                    <img src={courseImg ? require(`../../assets/images/course/${courseImg}`) : require(`../../assets/images/course/${courseImg1}`)} alt="image" />
                </Link>
            </div>
            <div className="course__inner">
                <h3 className="react-course-title">
                    <Link to={`/course/${courseID}`}>
                        {courseTitle ? courseTitle : 'Course Title'}
                    </Link>
                </h3>
                <p className="course__description">
                    {courseDescription ? courseDescription : 'Course description goes here. This provides a brief overview of what the course covers and what students can expect to learn.'}
                </p>
            </div>                                    
        </div>
	)
}

export default SingleCourse