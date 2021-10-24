import { combineReducers } from 'redux';
import todoCourses from './todoCourses';
import todoHotQuestion from './todoHotQuestion';
import todoUnAnwserQuestion from './todoUnAnwserQuestion';
import todoQuestion from './todoQuestion';
import todoBlogs from './todoBlog';


const rootReducer = combineReducers({
  courses: todoCourses,
  HotQuestions:todoHotQuestion,
  questionUnAnwser:todoUnAnwserQuestion,
  AllQuestions:todoQuestion,
  Blogs:todoBlogs,
})

export default rootReducer;