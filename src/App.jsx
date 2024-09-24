
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import MyProjects from "./Pages/MyProjects/MyProjects";
import Aboutme from "./Pages/Aboutme/Aboutme";



function App() {
  
  return (
    <>
  
    <BrowserRouter>
   
      <Routes>
      
      <Route path="/" element={<HomePage/>}> 
      <Route path="/MyProjects" element={<MyProjects/>}></Route>
      <Route path="/Aboutme" element={<Aboutme/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      
      </Route>
      </Routes>
     
      
      </BrowserRouter>
     
    </>
    
    
    
    
  )
}

export default App
