import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { FeedCard } from "./Componets/FeedCard";

function App() {
  return <>
  
 <Router>
   <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route exact path="/signin" element={<SignUp/>}/>
     <Route exact path='/login' element={<LogIn/>} />
     <Route exact path="/FeedCard" element={<FeedCard/>}/>

   </Routes>
 </Router>
  
  </>
}

export default App;
