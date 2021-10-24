import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMorePostBlogs } from '../../../redux/reducers/todoBlog';
import './Style.scss';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = <i className="fas fa-bookmark" style={{color: "#f05123"}}></i>;

function Blog(props) {
    const dispatch = useDispatch();
    const { listPostBlogByPage } = useSelector((state) => state.Blogs);

    const [page,setPage] = useState(1);

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPage(page+1)    
        }
    };

    useEffect(() => {
        dispatch(getMorePostBlogs(page));
    },[page])

    function renderBlogs(blogs){
        return blogs?.map((blog,index) => (
            <div className="blog__primary-item" key={index}>
                <div className="blog__primary-item-header">
                    <div className="blog__primary-item-header__avatar-user">
                        <img src={blog.user.avatar_cdn === "" ? "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" : blog.user.avatar_cdn } alt="" />
                        <span>{blog.user.name}</span>
                    </div>

                    <div className="blog__primary-item-header-btn">
                        <div className="blog__primary-item-header-btn__save-post">
                        { icon }
                        </div>
                        <div className="blog__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                </div>
                
                <div className="blog__primary-item-info">
                    <div className="blog__primary-item-info-text">
                        <a href={blog.slug} className="blog__primary-item-info-text__heading">
                            <h3>{blog.title}</h3>
                        </a>

                        <p className="blog__primary-item-info-text__desc">
                            {blog.meta_description}
                        </p>

                        <div className="blog__primary-item-info-text__Period">
                            <span className="blog__primary-item-info-text__Period-time" >7 giờ trước</span>
                            <span className="dot">.</span>
                            {blog.min_read} giờ xem
                        </div>

                    </div>
                    <div className="blog__primary-item-info-img">
                        <a href={blog.slug} className="blog__primary-item-info-img-avatar">
                            <img src={blog.thumbnail_cdn} alt="" />
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
                            {renderBlogs(listPostBlogByPage)}
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