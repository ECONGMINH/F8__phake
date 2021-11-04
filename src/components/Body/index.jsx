import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './Style.scss';
import Sidebar from '../Sidebar';
import Courses from '../containers/Courses';
import Question from '../containers/Question';
import Blog from '../containers/Blog';
import Code from '../containers/Code';
import Home from '../containers/Home';
import config from '../../config';

function Body(props) {
    return (
        <Router>
        <div className="content">
            <div className="content__sidebar"> <Sidebar  /></div>

            <div className="content__pages">
                <Route path={config.routes.home} exact render={()=>  <Home /> } />
                <Route path={config.routes.courses}  render={()=>  <Courses/>} />
                <Route path={config.routes.question}  render={()=>  <Question/>} />
                <Route path={config.routes.blog}  render={()=>  <Blog  />} />
                <Route path={config.routes.code}  render={()=>  <Code/> } />
            </div>  
       
        </div>    
        </Router>
        
    );
}

export default Body;