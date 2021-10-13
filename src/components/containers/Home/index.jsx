import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import { Scrollbars } from 'react-custom-scrollbars';
import SlideShow from '../../SlideShow/slideShow';
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
    const {slideShow,courses,blog,hotVideo} = props
   
    const hotBlogs = blog.filter((blog,id) => {
        return blog.SeeTimePost > 30 ;
    })

   
   
    function renderCourse(courses){
        return   <div className="Home__content-list-box">
        <div className="Home__content-list-text">
            <h3 className="Home__content-list-text__heading">
                Khóa học nỗi bật
            </h3>
            <a className="Home__content-list-text__show-more" href="">Xem tất cả  <i class="fas fa-chevron-right"></i></a>
        </div>
        
        <ul className="Home__content-list-layout">
    
                {
                    courses.map( course =>(
                <li className="Home__content-list-item" key={course.id}>
                    <a  href="">
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${course.image})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href="">
                            {course.name}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__quantity-student">
                        <i class="fas fa-users"></i>
                        <span>{course.quantityStudents}</span>
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
            <a className="Home__content-list-text__show-more" href="">Xem tất cả  <i class="fas fa-chevron-right"></i></a>
        </div>
        
        <ul className="Home__content-list-layout">
     
                {
                    hotBlogs.map( blog =>(
                <li className="Home__content-list-item" key={blog.id}>
                    <a  href="">
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${blog.postImage})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href="">
                            {blog.post}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__author">
                        <a href="" className="Home__content-list-item__author__img">
                            <img src={blog.avatar} alt="" />
                        </a>
                        <a  href="" className="Home__content-list-item__author__name">
                                <strong>{blog.userName}</strong>
                                <span className="postItemDot">.</span>
                                <span>{blog.SeeTimePost} giờ xem</span>
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
                        {renderCourse(courses)}
                        {renderHotBlog(hotBlogs)}
                        {renderHotVideo(hotVideo)}
                    </div>
                </div>
            </div>

       </section>
    );
}


export default Home;