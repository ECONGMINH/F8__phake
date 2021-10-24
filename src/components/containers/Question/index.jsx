import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch ,NavLink } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import questionsApi from '../../../api/questionsApi';
import { useDispatch, useSelector } from 'react-redux'
import { getListQuestionHot } from '../../../redux/reducers/todoQuestion';

import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import './Style.scss';

import HotQuestion from './hotQuestion';
import AllQuestion from './allQuestion';
import UnAnwserQuestion from './unAnwserQuestion';

function Question(props) {
    return (
        <React.Fragment>
            <Switch>
                <div className="grid-pages-stand">
                    <section className="grid__body__full-width">
                        <section className="question index-module_row__-AHgh">
                        
                            <section className="question__primary">
                                <div className="question__primary-header">
                                    <div className="question__primary-header-tabs">
                                    
                                    <NavLink to='/question' exact  activeClassName="question__header-active"> 
                                        Nỗi Bật
                                    </NavLink>

                                    <NavLink to='/question/unanswered' activeClassName="question__header-active"> 
                                        Chưa Trả Lời
                                    </NavLink>

                                    <NavLink to='/question/all' activeClassName="question__header-active"> 
                                        Tất cả
                                    </NavLink>
                                    </div>
                                </div>
                                    <Route path='/question' exact component={HotQuestion} />
                                    <Route path='/question/unanswered' component={UnAnwserQuestion} />
                                    <Route path='/question/all' component={AllQuestion} />
                            </section>
                            <section className="question__empty "></section>
                        </section>
                    </section>
                </div>     
            </Switch> 
        </React.Fragment>
    );
}
export default Question;