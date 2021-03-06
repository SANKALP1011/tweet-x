import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import FeedPage from "../src/Pages/Feed";
import User from "./Pages/Users";
import UserProfilePage from "./Pages/UserProfilePage";

function App() {
  return <>
  
 <Router>
   <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route exact path="/signin" element={<SignUp/>}/>
     <Route exact path='/login' element={<LogIn/>} />
     <Route exact path="/FeedPage" element={<FeedPage/>}/>
     <Route exact path="/UserPage" element={<User/>}/>
     <Route exact path="/UserProfilePage" element={<UserProfilePage/>} />

   </Routes>
 </Router>
  
  </>
}

export default App;
