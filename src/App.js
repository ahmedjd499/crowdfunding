
import { Component } from 'react';
import Home from './component/Home'
import Landing from './component/landing'
import SignUp from './component/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



class App extends Component{

  render()
  {
    return <Router>
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/signup" element={<SignUp />}/>
                <Route exact path="/landing" element={<Landing />}/>
             </Routes>
         </Router>
    
  
  }
}

export default App;
