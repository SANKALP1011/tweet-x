import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignUp from "./Pages/SignUp";


function App() {
  return <>
  
 <Router>
   <Routes>
     <Route exact path='/' element={<SignUp/>} />
   </Routes>
 </Router>
  
  </>
}

export default App;
