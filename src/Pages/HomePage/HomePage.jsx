
import white from "/assets/butterfly.jpg"
import "./HomePage.css";
import github from "/assets/github.png";
import linkedin from "/assets/linkedin.png";
import dalia from "/assets/dalia.jpg"
import { Link, Outlet ,useLocation} from "react-router-dom";
import { saveAs } from 'file-saver';
function HomePage() {
  const location = useLocation();
  const email = "dalia_dz88@yahoo.com"; 
  
    const downloadFile = () => {  
        saveAs('../public/assets/CV-Dalia Osama Elamir Khaled.pdf', 
          'CV-Dalia Osama Elamir Khaled.pdf');  
    };  
  return (
    
    <main>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyProjects">Portfolio</Link>
          </li>
          <li>
            <Link to="/Aboutme">Aboutme</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <nav>
          <Link
            to="https://github.com/daliaosama?tab=repositories"
            target="_blank"
          >
            <img src={github} className="img" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/dalia-osama-elamir-khaled/"
            target="_blank"
          >
            <img src={linkedin} className="img" />
          </Link>
        </nav>
        
      </header>
      <Outlet></Outlet>
    {location.pathname === '/' && (
          <div id="maindiv">
            <div id="Info">
              <div id="Name">
              <h1 id="name">Dalia Osama Elamir</h1>
              <div id="links">
              <img src={dalia} id="image" />
      <Link
            to="https://github.com/daliaosama?tab=repositories"
            target="_blank"
          >
            <img src={github} className="imgs" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/dalia-osama-elamir-khaled/"
            target="_blank"
          >
            <img src={linkedin} className="imgs" />
          </Link>
          
      </div>
              
              <h2 >FrontEnd Developer</h2>
              
              </div>
             
              <div id="buttons">
      <button onClick={downloadFile}>Download CV</button>
      <button><a href={`mailto:${email}`}>Hire me</a></button>
      </div>
     
            </div>
           <div id="Image" >
           <img src={white} id="rose"/>
           </div>
          </div>)}
    </main>
  );
}
export default HomePage;
