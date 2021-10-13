import React, { useState } from 'react';
import coursesApi from '../../../api/coursesApi';
import './Style.scss';
import { useEffect } from 'react/cjs/react.development';


function Courses(props) {
    
    const [coursesList,setCoursesList] =  useState([])
    useEffect(() => {
        const fetchCoursesList = async () => {
            try{
                const response =await coursesApi.getAll();
                setCoursesList(response.data)
            } catch(error){
                console.log('Fail to fetch courses list:',error)
            }
        }
        fetchCoursesList();
    },[]);
    
  
    function renderCourses(courses){
        return courses.map(course =>(
            <li key={course.id} className="Study__Page__courses-item">
                <a href={course.slug}>
                    <div className="Study__Page__courses-item-img" style={{backgroundImage: `url(${course.thumbnail_cdn})`}}></div>
                </a>
                <h3 className="Study__Page__courses-item__title">
                    <a href="">
                    {course.title}
                    </a>
                </h3>
                <div className="Study__Page__courses-item__quantity-student">
                    <i class="fas fa-users"></i>
                    <span>{course.students_count}</span>
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
                     
                        {renderCourses(coursesList)}
                    </ul>
                </div>
            </div>  
        </section>

    );
}

export default Courses;