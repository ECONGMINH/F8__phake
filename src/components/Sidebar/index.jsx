import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss'
import { NavLink } from 'react-router-dom';
import config from '../../config.js'

Sidebar.propTypes = {
    changepage: PropTypes.func,
    pageActive: PropTypes.any,
   

};
Sidebar.defaultProps ={
    changpage:null,
    pageActive:null,

   
}
const PAGE_HOME ='home';
const PAGE_COURSES ='courses';
const PAGE_QUESTION ='question';
const PAGE_BLOG = 'blog';
const PAGE_CODE = 'code'


function Sidebar(props) {
    const {changepage} = props;
    const pageActives = localStorage.getItem('pages')

    return (             
            <div className="slider">
                    <div>
                        <div className="slider__createButton">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>

                    <ul className="slider__movePages-list">
                        <li>
                            <NavLink to={config.routes.home} exact activeClassName="page__Active">
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>

                        <li>
                        <NavLink to={config.routes.courses} activeClassName="page__Active">
                                <i className="fas fa-lightbulb"></i>
                                <span>Học</span>
                        </NavLink>
                            
                        </li>
                        

                        <li>
                        <NavLink to={config.routes.question} activeClassName="page__Active">
                                <i className="fas fa-question"></i>
                                <span>Hỏi</span>
                        </NavLink>
                        
                        </li>

                        <li>
                        <NavLink to={config.routes.blog} activeClassName="page__Active">
                                <i className="fas fa-newspaper"></i>
                                <span>Blog</span>
                        </NavLink>

                        </li>

                        <li>
                        <NavLink to={config.routes.code} activeClassName="page__Active">
                                <i className="fas fa-code"></i>
                                <span>Code</span>
                        </NavLink>
                        </li>
                      
                    </ul>
                </div> 
    );
}

export default Sidebar;