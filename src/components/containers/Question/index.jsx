import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import './Style.scss';

Question.propTypes = {
    questions: PropTypes.array,
};
Question.defaultProps ={
    questions:[],
}

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = <i className="fas fa-bookmark" style={{color: "#f05123"}}></i>;
const PAGE_NOTANSWER ='notanswer';
const PAGE_DEFAULT = 'question';
const PAGE_HOT_QUESTION='hotquestion';

function Question(props) {
    const {questions} =props;

    const notAnswerPage = questions.filter((question,id) => {
        return question.answers < 1;
    });
    const hotQuestionPage = questions.filter((question,id) => {
        return question.answers > 30;
    });

    const [defaultPage] = useState(questions);
    const [notAnswer] = useState(notAnswerPage);
    const [hotQuestion] = useState(hotQuestionPage);
    const [page,setPage] = useState(PAGE_HOT_QUESTION);
    

    const [iconBookMark,setIconBookMark] = useState(icon);
    const [iconBookMarkActive,seticonBookMarkActive] = useState(iconkActive);


    const [ListSaveQuestion,setListSaveQuestions] = useState([]);
    
    function saveQuestion(id){
        let checkListSaveQuestion = ListSaveQuestion.some(qs => {
            return qs.id === id
        })
        if(checkListSaveQuestion){
            let index = ListSaveQuestion.findIndex(qs => qs.id === id)
            let newListQestionAfterDelete = [...ListSaveQuestion];
            newListQestionAfterDelete.splice(index,1);
            setListSaveQuestions(newListQestionAfterDelete);
            
        }else{
            let index = questions.findIndex( item => item.id === id  )
            let questionItem = questions[index];
           const listSaveQuestion =[...ListSaveQuestion,questionItem];
           const newSaveListQuestion = Array.from(new Set(listSaveQuestion));
           setListSaveQuestions(newSaveListQuestion);
            console.log(newSaveListQuestion);
        }

    }

    const changePages = (pages) =>{
        setPage(pages);
    }


    function render(questions){
        return   questions.map(question =>(

            <div key={question.id} className="question__primary-item">
                <div className="question__primary-item-header">
                    <div className="question__primary-item-header-text">{question.Categories}</div>
                    <div className="question__primary-item-header-btn">
                        <div className="question__primary-item-header-btn__save-post"  onClick={(e) =>saveQuestion(question.id)} >
                        { ListSaveQuestion.some((qs => qs.id === question.id )) ? iconBookMarkActive : iconBookMark }
                        
                        </div>
                        <div className="question__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                </div>
                <h2 className="question__primary-item-heading">
                    <a href={question.link}>  {question.question}</a>
                </h2>
                <div className="question__primary-item-info">

                    <div className="question__primary-item-info-user">
                        <img src={question.avatar} alt="" />
                        <span className="question__primary-item-info-user-text">
                            Đăng bởi
                            <strong>{question.userName}</strong>
                            <span className="dot">.</span>
                            <span>{question.Period} Ngày trước</span>
                        </span>
                    </div>

                    <div className="question__primary-item-info-answer">
                    
                    <div className="question__primary-item-info-answer-avatar">
                            {question.avatarUser_answer.map(avatar => (
                            <img  src={avatar} alt="" />
                            ))}

                    </div>
                            <span className="question__primary-item-info-answer-text">
                              {question.answers > 0 ? question.answers : '' }
                            </span>

                    </div>
                </div>
                <div className="question__primary-item-desc">{question.desc}</div>

                <div className="question__primary-item-footer">
                    <div className="question__primary-item-footer-tabs">
                    {question.types.map(type =>(
                        <div className="question__primary-item-footer-tab">{type}</div>
                    ))}
                    </div>

                    <div className="question__primary-item-footer-btn">
                        <a href={question.link}>
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
                                <a className={`question__primary-header-tab ${page == PAGE_HOT_QUESTION ? 'question__header-active' : ''}` } onClick={()=> changePages(PAGE_HOT_QUESTION)}>Nỗi Bật</a>
                                <a className={`question__primary-header-tab ${page == PAGE_NOTANSWER ? 'question__header-active': ''}`} onClick={()=> changePages(PAGE_NOTANSWER)} >Chưa Trả Lời</a>
                                <a className={`question__primary-header-tab ${page == PAGE_DEFAULT ? 'question__header-active': ''}` }onClick={()=> changePages(PAGE_DEFAULT)}>Tất cả</a>
                            </div>
                        </div>
                            {page === PAGE_DEFAULT && render(defaultPage) }
                            {page === PAGE_NOTANSWER && render(notAnswer) }
                            {page === PAGE_HOT_QUESTION && render(hotQuestion) }
                    </section>

                    <section className="question__empty ">

                    </section>

                </section>
            </section>
        </div>
        
    );
}

export default Question;