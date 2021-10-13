import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
Courses.propTypes = {
    courses: PropTypes.array,
};
Courses.defaultProps = {
    courses: [],
};


function Courses(props) {
    const {courses} = props;
    
    function renderCourses(courses){
        return courses.map(course =>(
            <li key={course.id} className="Study__Page__courses-item">
                <a href={course.link}>
                    <div className="Study__Page__courses-item-img" style={{backgroundImage: `url(${course.image})`}}></div>
                </a>
                <h3 className="Study__Page__courses-item__title">
                    <a href="">
                    {course.name}
                    </a>
                </h3>
                <div className="Study__Page__courses-item__quantity-student">
                    <i class="fas fa-users"></i>
                    <span>{course.quantityStudents}</span>
                </div>
            </li>
        ))
    }
    return (
     
        <section className="grid__body__full-width ">

            <div className="Study__Page">
                <h2 className="Study__Page-heading">
                    Khóa học nổi bật
                </h2>

                <div className="Study__Page__courses">
                    <ul className="Study__Page__courses-layout">
                        {renderCourses(courses)}
                    </ul>
                </div>
            </div>  
        </section>

    );
}

export default Courses;