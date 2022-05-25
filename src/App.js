import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";


function App() {
  return <>
  
 <Router>
   <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route exact path="/signin" element={<SignUp/>}/>
     <Route exact path='/login' element={<LogIn/>} />

   </Routes>
 </Router>
  
  </>
}

export default App;
