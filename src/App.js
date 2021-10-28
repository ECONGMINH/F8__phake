import { BrowserRouter as Router, Route,  } from "react-router-dom";
import F8 from "./components";
import Login from "./components/Login";


function App() {
  // return(
  //   <Router>
  //     <Route path='/'  exact  component={F8}/>
  //     <Route path='/login' exact  component={Login}/>
  //   </Router>
  // ) 

  return <F8/>
}

export default App;
