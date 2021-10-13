import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
Blog.propTypes = {
    blogs: PropTypes.array,
};
Blog.defaultProps ={
    blogs : [],
}


const icon = <i className="far fa-bookmark"></i>;
const iconkActive = <i className="fas fa-bookmark" style={{color: "#f05123"}}></i>;

function Blog(props) {
    const {blogs} = props;
    const [iconBookMark,setIconBookMark] = useState(icon);
    const [iconBookMarkActive,seticonBookMarkActive] = useState(iconkActive);
    const [ListSaveBlog,setListSaveBlog] = useState([]);

    function saveBlog(e,id){
        let checkListSaveBlog = ListSaveBlog.some(bl => {
            return bl.id === id
        })
        if(checkListSaveBlog){
            let index = ListSaveBlog.findIndex(bl => bl.id === id)
            let newListBlogAfterDelete = [...ListSaveBlog];
            newListBlogAfterDelete.splice(index,1);
            setListSaveBlog(newListBlogAfterDelete);
            
        }else{
            let index = blogs.findIndex( item => item.id === id  )
            let blogItem = blogs[index];
           const listSaveBlogs =[...ListSaveBlog,blogItem];
           const newSaveListBlog = Array.from(new Set(listSaveBlogs));
           setListSaveBlog(newSaveListBlog);
            console.log(newSaveListBlog);
        }

    }

    function renderBlogs(blogs){
        return blogs.map( blog => (

            <div className="blog__primary-item" key={blog.id}>
                <div className="blog__primary-item-header">
                    <div className="blog__primary-item-header__avatar-user">
                        <img src={blog.avatar} alt="" />
                        <span>{blog.userName}</span>
                    </div>

                    <div className="blog__primary-item-header-btn">
                        <div className="blog__primary-item-header-btn__save-post" onClick={(e) =>saveBlog(e,blog.id)}>
                        { ListSaveBlog.some((bl => bl.id === blog.id )) ? iconBookMarkActive : iconBookMark }
                        </div>
                        <div className="blog__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                </div>
                
                <div className="blog__primary-item-info">
                    <div className="blog__primary-item-info-text">
                        <a className="blog__primary-item-info-text__heading">
                            <h3>{blog.post}</h3>
                        </a>

                        <p className="blog__primary-item-info-text__desc">
                            {blog.desc}
                        </p>

                        <div className="blog__primary-item-info-text__Period">
                            <span className="blog__primary-item-info-text__Period-time" >{blog.period} giờ trước</span>
                            <span className="dot">.</span>
                            {blog.SeeTimePost} giờ xem
                        </div>

                    </div>
                    <div className="blog__primary-item-info-img">
                        <a href="" className="blog__primary-item-info-img-avatar">
                            <img src={blog.postImage} alt="" />
                        </a>
                    </div>
                </div>
            </div>
                ))
    }


    return (
        
            <div className="grid-pages-stand">
                <section className="grid__body__full-width">
                    <section className="blog index-module_row__-AHgh">
                        <section className="blog__primary">
                            <div className="blog__primary-header">
                                <div className="blog__primary-header-tabs">
                                    <a href="" className="blog__primary-header-tab Blog__header-active" >Phù hợp với bạn</a>
                                </div>
                            </div>
                            {renderBlogs(blogs)}

                        </section>


                        <section className="blog__propose">

                            <div className="blog__propose-box">
                                <div className="blog__propose-layout">
                                    <div className="blog__propose-heading">
                                        <h3>
                                            CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                                        </h3>
                                    </div>
                                    <ul className="blog__propose-list">
                                        <li className="blog__propose-list-item"><a href="">Front-end / Mobile apps</a></li>
                                        <li className="blog__propose-list-item"><a href="">Back-end / Devops</a></li>
                                        <li className="blog__propose-list-item"><a href="">UI / UX / Design</a></li>
                                        <li className="blog__propose-list-item"><a href="">Others</a></li>
                                    </ul>
                                </div>
                            </div>

                        </section>


                    </section>
                </section>
            </div>   
        );
}

export default Blog;