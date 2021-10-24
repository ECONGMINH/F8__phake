import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCourses} from '../../../redux/reducers/todoCourses'
import { Link, NavLink } from "react-router-dom";
import { getPostBlog } from '../../../redux/reducers/todoBlog';
import PropTypes from 'prop-types';
import './Style.scss';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import { Scrollbars } from 'react-custom-scrollbars';
import SlideShow from '../../SlideShow/slideShow';
import config from '../../../config';

Home.propTypes = {
    slideShow: PropTypes.any,
    courses: PropTypes.any,
    blog: PropTypes.any,
    hotVideo: PropTypes.any,
};
Home.defaultProps ={
    slideShow:null,
    courses:null,
    blog:null,
    hotVideo:null,
}

function Home(props) {
    const {slideShow,hotVideo} = props
    const dispatch = useDispatch()
    const { allCourses} = useSelector((state) => state.courses)
    const { listPostBlog } = useSelector((state) => state.Blogs);

    useEffect(() => {
        dispatch(getAllCourses)
        dispatch(getPostBlog)
    },[]);

   
    function renderCourse(courses){
        return   <div className="Home__content-list-box">
        <div className="Home__content-list-text">
            <h3 className="Home__content-list-text__heading">
                Khóa học nỗi bật
            </h3>
            <Link to={config.routes.courses} className="Home__content-list-text__show-more" href="">Xem tất cả  <i class="fas fa-chevron-right"></i></Link>
        </div>
        
        <ul className="Home__content-list-layout">
                {
                    courses?.map( (course,index) =>(
                <li className="Home__content-list-item" key={index}>
                    <a  href={course.slug}>
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${course.thumbnail_cdn})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href={course.slug}>
                            {course.title}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__quantity-student">
                        <i class="fas fa-users"></i>
                        <span>{course.students_count}</span>
                    </div>
                </li>

                    ))
                }
        </ul></div>
    }

    function renderHotBlog(hotBlogs){
        return   <div className="Home__content-list-box">

        <div className="Home__content-list-text">
            <h3 className="Home__content-list-text__heading">
                Bài viết nổi bật
            </h3>
            <Link to={config.routes.blog} className="Home__content-list-text__show-more" href="">Xem tất cả  <i class="fas fa-chevron-right"></i></Link>
        </div>
        
        <ul className="Home__content-list-layout">
                {
                    hotBlogs?.map( (blog,index) =>(
                <li className="Home__content-list-item" key={index}>
                    <a  href={blog.slug}>
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${blog.thumbnail_cdn})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href={blog.slug}>
                            {blog.title}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__author">
                        <a href={blog.slug} className="Home__content-list-item__author__img">
                            <img src={blog.user.avatar_cdn === "" ? "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" : blog.user.avatar_cdn } alt="" />
                        </a>
                        <a  href={blog.slug} className="Home__content-list-item__author__name">
                                <strong>{blog.user.name}</strong>
                                <span className="postItemDot">.</span>
                                <span>{blog.min_read} giờ xem</span>
                        </a>
                    </div>
                </li>
                    ))
                }
        </ul>
        </div>
    }
    function renderHotVideo(hotVideos){
        return   <div className="Home__content-list-box">

        <div className="Home__content-list-text">
            <h3 className="Home__content-list-text__heading">
                Video nỗi bật
            </h3>
            <a className="Home__content-list-text__show-more" href="">Xem tất cả  <i class="fas fa-chevron-right"></i></a>
        </div>
        
        <ul className="Home__content-list-layout">
     
                {
                    hotVideos.map( hotVideo =>(
                <li className="Home__content-list-item" key={hotVideo.id}>
                    <a  href="">
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${hotVideo.image})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href="">
                            {hotVideo.title}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__info">
                       <p className="Home__content-list-item__info-view">
                            <i className="fas fa-eye"></i>
                            <span>{hotVideo.view}</span>

                       </p>
                       <p className="Home__content-list-item__info-like">
                            <i className="fas fa-thumbs-up"></i>
                            <span>{hotVideo.like}</span>

                       </p>
                       <p className="Home__content-list-item__info-comments">
                            <i className="fas fa-comment"></i>
                            <span>{hotVideo.comments}</span>

                       </p>
                    </div>
                </li>

                    ))
                }
        </ul>
        </div>
    }

    return (
       <section className="grid__body__full-width"> 
           <SlideShow slideShow={slideShow} />
            <div className="Home__content">
                <div className="Home__content-layout">
                    <p className="quantity__student"> <strong>104.446+</strong> người khác đã học</p>
                    <div className="Home__content-list">
                        {renderCourse(allCourses)}
                        {renderHotBlog(listPostBlog)}
                        {renderHotVideo(hotVideo)}
                    </div>
                </div>
            </div>
       </section>
    );
}


export default Home;