import { combineReducers } from 'redux';
import todoCourses from './todoCourses';
import todoQuestion from './todoQuestion';
import todoBlogs from './todoBlog';


const rootReducer = combineReducers({
  courses: todoCourses,
  questions:todoQuestion,
  Blogs:todoBlogs,
})

export default rootReducer;