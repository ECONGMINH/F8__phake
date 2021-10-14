import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import './Style.scss';
import { useEffect } from 'react/cjs/react.development';
import questionsApi from '../../../api/questionsApi';
Question.propTypes = {
    questions: PropTypes.array,
};
Question.defaultProps ={
    questions:[],
}

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = <i className="fas fa-bookmark" style={{color: "#f05123"}}></i>;
const PAGE_NOTANSWER ='unanswered';
const PAGE_AllQUESTION = 'all';
const PAGE_HOT_QUESTION='best';

function Question(props) {
    const [iconBookMark,setIconBookMark] = useState(icon);
    const [iconBookMarkActive,seticonBookMarkActive] = useState(iconkActive);

    const [questionList,setQuestionList] = useState([]);
    const [listQuestionPage,setListQuestionPage] = useState(1);
    const [typePage,setTypePage] = useState(PAGE_HOT_QUESTION);
    
    const  transferPage = (pages) => {
        setTypePage(pages)
        setListQuestionPage(1)
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let newPages = listQuestionPage + 1;
            setListQuestionPage(newPages);
            console.log(listQuestionPage)
        }
    };

    useEffect(() => {
        const fetchQuestionList = async () => {
            try{
                const params = {
                    type:typePage,
                    page:listQuestionPage,
                }
                const response = await questionsApi.getAll(params);
                if(params.page > 1){
                    setQuestionList(questionList.concat(response.data))
                }else{
                    setQuestionList(response.data)
                }
            }catch(error){
                console.log('Fail to fetch courses list:',error)
            }
        }
        fetchQuestionList();
    },[listQuestionPage,typePage])
  
    function renderQuestion(questions){
        return   questions.map((question,index) =>(

            <div key={index} className="question__primary-item">
                <div className="question__primary-item-header">
                    <div className="question__primary-item-header-text">Front-end / Mobile Apps</div>
                    <div className="question__primary-item-header-btn">
                        <div className="question__primary-item-header-btn__save-post">{icon}</div>
                        <div className="question__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                </div>
                <h2 className="question__primary-item-heading">
                    <a href={question.slug}>{question.title}</a>
                </h2>
                <div className="question__primary-item-info">

                    <div className="question__primary-item-info-user">
                        <img src={question.user.avatar_cdn} alt="" />
                        <span className="question__primary-item-info-user-text">
                            Đăng bởi
                            <strong>
                                {question.user.name}
                            </strong>
                            <span className="dot">.</span>
                            <span>{question.Period} Ngày trước</span>
                        </span>
                    </div>

                    <div className="question__primary-item-info-answer">
                    
                    <div className="question__primary-item-info-answer-avatar">
                            {question.comments.map(avatar => (
                                <img  src={avatar.commentator.avatar} alt="" /> 
                            ))}
                                
                    </div>
                            <span className="question__primary-item-info-answer-text">
                              {question.comments_count > 0 ? question.comments_count : '' } Câu trả lời
                            </span>

                    </div>
                </div>

                <div className="question__primary-item-desc">{question.meta_description}</div>

                <div className="question__primary-item-footer">
                    <div className="question__primary-item-footer-tabs">
                    {question.selected_tags.map(type =>(
                        <div className="question__primary-item-footer-tab">{type.name}</div>
                    ))}
                    </div>

                    <div className="question__primary-item-footer-btn">
                        <a href={question.slug}>
                            <span>Chi tiết</span>
                        </a>
                    </div>
                </div>
            </div>
                ))
    }

    return (
        <div className="grid-pages-stand">
            <section className="grid__body__full-width">
                <section className="question index-module_row__-AHgh">
                
                    <section className="question__primary">
                        <div className="question__primary-header">
                            <div className="question__primary-header-tabs">
                                <a className={`question__primary-header-tab ${typePage === PAGE_HOT_QUESTION ? "question__header-active" : "" }`} onClick={() => transferPage(PAGE_HOT_QUESTION )}>Nỗi Bật</a>
                                <a className={`question__primary-header-tab ${typePage === PAGE_NOTANSWER ? "question__header-active" : "" }`} onClick={() => transferPage(PAGE_NOTANSWER)}>Chưa Trả Lời</a>
                                <a className={`question__primary-header-tab ${typePage === PAGE_AllQUESTION ? "question__header-active" : "" }`} onClick={() => transferPage(PAGE_AllQUESTION )}>Tất cả</a>
                                {/* <a className="question__primary-header-tab" >Chưa Trả Lời</a>
                                <a className="question__primary-header-tab">Tất cả</a> */}
                            </div>
                        </div>
                            {renderQuestion(questionList)}
                    </section>

                    <section className="question__empty "></section>
                </section>
            </section>
        </div>      
    );
}
export default Question;