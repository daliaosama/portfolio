import solar from "/assets/solar.png";
import filter from "/assets/filter.png";
import githubuser from "/assets/githubuser.png"
import portfolio from "/assets/portfolio.png"
import {Link} from 'react-router-dom'
import form from "/assets/form.png"
import timetracker from "/assets/timetracker.png"
import joblisting from "/assets/joblisting.png"
import card from "/assets/profilecard.png"
import social from "/assets/sociallinks.png"
import apparel from "/assets/apparel.png"
import perfume from "/assets/perfume.png"
import fylo from "/assets/fylolandingpage.png"
import "./MyProjects.css";
import easybank from "/assets/easybanklandingpage.png"
import ecommerce from "/assets/ecommerce.png"

function MyProjects() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div id="content">
        
        <div className="project">
        <Link to="https://codepen.io/daliaosama/full/aROOxb" target="_blank">
            <h4>filter project</h4>
          </Link>
        <Link to="https://codepen.io/daliaosama/full/aROOxb" target="_blank">
        <img src={filter} className="image" />
        </Link>
          
          
         
          <div id="languages">
            <label>HTML5</label>
            <label>CSS3</label>
            <label>JavaScript</label>
          </div>
        </div>
        <div className="project">
            <Link to="https://timetracker-rho-sage.vercel.app/">
            <h4>Time Tracker</h4></Link>
            <Link to="https://timetracker-rho-sage.vercel.app/">
            <img src={timetracker} className="image"/></Link>
            <div id="languages">
            <label >HTML5</label>
            <label >CSS3</label>
            <label >JavaScript</label>
            <label >React</label>
          </div>
          </div>
          <div className="project">
            <Link to="https://apparel-tau.vercel.app/" target="_blank">
            <h4>Apparel</h4>
            </Link>
            <Link to="https://apparel-tau.vercel.app/" target="_blank">
            <img src={apparel} className="image" />
            </Link>
            <div id="languages">
            <label >HTML5</label>
            <label >CSS3</label>
            <label >JavaScript</label>
            <label >React</label>
          </div>
          </div>
          <div className="project">
            <Link to ="https://e-commerce-website-two-drab.vercel.app/" target="_blank">
            <h4>E-commerce Website</h4>
            </Link>
            <Link to ="https://e-commerce-website-two-drab.vercel.app/" target="_blank">
          <img src={ecommerce} className="image" />
            </Link>
            <div id="languages">
            <label >HTML5</label>
            <label >CSS3</label>
            <label >JavaScript</label>
            <label >React</label>
          </div>
          </div>
          <div className="project">
          <Link to="https://formreact-beta.vercel.app/" target="_blank">
          <h4>Form</h4>
          </Link>
          <Link to="https://formreact-beta.vercel.app/" target="_blank">
          <img src={form} className="image"/>
          </Link>
          <div id="languages">
            <label >HTML5</label>
            <label >CSS3</label>
            <label >JavaScript</label>
            <label >React</label>
          </div>
        </div>
        <div className="project">
        <Link to="https://githubuser-xi.vercel.app/" target="_blank"><h4>Github user search using API</h4></Link>
            <Link to="https://githubuser-xi.vercel.app/" target="_blank"><img src={githubuser} className="image"/></Link>
      
      
       
        <div id="languages">
            <label>HTML5</label>
            <label>CSS3</label>
            <label>JavaScript</label>
            <label>React</label>
          </div>
        </div>
        <div className="project">
        <Link to="https://single-page-portfolio-one.vercel.app/" target="_blank">
          <h4>Single Page Portfolio</h4>
          </Link>
          <a href="https://single-page-portfolio-one.vercel.app/" target="_blank">
          <img src={portfolio} className="image" />
          </a>
         
          <div id="languages">
            <label>HTML5</label>
            <label>CSS3</label>
            <label>JavaScript</label>
          </div>
        </div>
        <div className="project">
        <a href="https://daliaosama.github.io/solarplanets/" target="_blank">
            <h4>Solar Planets</h4>
          </a>
          
          <img src={solar} className="image" />
          
          <div id="languages">
            <label>HTML5</label>
            <label>CSS3</label>
            <label>JavaScript</label>
          </div>
        </div>
        <div className="project">
          <Link to="https://joblisting-flax.vercel.app/">
          <h4>Job Listing</h4></Link>
          <Link to="https://joblisting-flax.vercel.app/">
          <img src={joblisting} className="image"/></Link>
           <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
        <div className="project">
          <Link to="https://profilecard-nu-ten.vercel.app/" target="_blank">
          <h4>Profile Card</h4>
          </Link>
          <Link to="https://profilecard-nu-ten.vercel.app/" target="_blank">
          <img src={card} className="image"/>
          </Link>
          <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
        <div className="product">
          <Link to="https://easybanklandingpage-sand.vercel.app/" target="_blank">
          <h4>Easy Bank LandingPage</h4>
          </Link>
          <Link to="https://easybanklandingpage-sand.vercel.app/" target="_blank">
          <img src={easybank} className="image"/>
          </Link>
          <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
        <div className="project">
          <Link to="https://fylo-three-lime.vercel.app/" target="_blank">
          <h4>Fylo Landing Page</h4>
          </Link>
          <Link to="https://fylo-three-lime.vercel.app/" target="_blank">
            <img src={fylo} className="image" />
          </Link>
          <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
        <div className="project">
          <Link to="https://product-tau-six.vercel.app/" target="_blank">
          <h4>Perfume</h4></Link>
          <Link to="https://product-tau-six.vercel.app/" target="_blank">
          <img src={perfume} className="image" />
          </Link>
          <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
        
        
        <div className="project">
          <Link to="https://sociallinks-black.vercel.app/" target="_blank">
           <h4>Social links</h4>
          </Link>
          <Link to="https://sociallinks-black.vercel.app/"target="_blank">
          <img src={social} className="image" />
          </Link>
          <div id="languages">
           <label>HTML5</label>
           <label>CSS3</label>
           <label>JavaScript</label>
           <label>React</label>
         </div>
        </div>
      </div>
    </div>
  );
}
export default MyProjects;
