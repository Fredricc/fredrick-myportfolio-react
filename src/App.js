import React, { useState, useEffect, useRef}  from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Education from './Education';
import Projects from './Projects';
import Programming from './Programming';
import Work from './Work';
import Testimonials from './testimonial';
import Contact from './Contact';
import Typed from 'typed.js';
// ..
AOS.init();
  
export default function App(){
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programming, setprogramming] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() =>{
    const typed = new Typed(el.current, {
      strings: ["Enthusiastic Dev 😎",
      "Frontend Developer 📰",
      "Full Stack Developer 💻",
      "Data Analyst 📈 📊"
    ],
    startDelay:0,
    typeSpeed: 250,
    backSpeed: 20,
    backDelay: 200,
    smartBackspace:true,
    loop: true,
    showCursor: true,
    autoInsertCss: true,
    // cursorChar: "|"
    });

    return ()=>{
      typed.destroy();
    }
  },[]);
  const el = useRef(null);
  function SetAllFalse(){
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function ChangeState(function1, state1){
    SetAllFalse();
    function1(state1);
  }

  return (
  <div className="App" id="myhome">
    <div className='navbar-option-mobile bg-new-2'>
      <div className=''>
      <div className='bars mx-1' onClick={() => setopennav(!opennav)}>
      {" "}
      </div>
      </div>
    </div>
    <nav className={!opennav ? "d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all" :  "d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all" }>
        <a href="#myhome"  className="brand-name" onClick={() => setopennav(false)}>FREDRICK MAKOBU NJUGUNA{" "}</a>
        <div className="d-flex flex-rows">
          <a href="#myhome" className="mx-4 nav-item" onClick={() => setopennav(false)}>Home{" "}</a>
          <a href="#aboutme" className="mx-4 nav-item" onClick={() => setopennav(false)}>About Me{" "}</a>
          <a href="#myresume" className="mx-4 nav-item" onClick={() => setopennav(false)}>Resume{" "}</a>
          <a href="#mytestimonial" className="mx-4 nav-item" onClick={() => setopennav(false)}>Testimonial{" "}</a>
          <a href="#contactme" className="mx-4 nav-item" onClick={() => setopennav(false)}>Contact Me{" "}</a>
        </div>
      </nav>
    <div className="herosection px-10 py-2">
      <div className='herosection-2 row justify-content-center'>
        <div className="col-lg-6 col-md-6">
          <div className='d-flex flex-column justify-content-center Im-text-section'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <span className='Im-text'>
              Hello, I'm <span className='name-Im-text'> Fredrick Makobu Njuguna</span>
            </span>
              <span className='Im-text-enthusiastic py-2' ref={el} style={{minHeight:"79px"}}>
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className='Im-text-subheading'>
                knack of building application with front and backend operations
              </span>
              <div className='d-flex flex-row justify-content-center mt-5 mb-5'>
                <a href="#contactme" className='btn-hire-me'>Hire Me</a>
                <a href='https://res.cloudinary.com/pundit-zone-limited/raw/upload/v1643688916/CV_Fredrick_Njuguna_c6cjlg.docx' 
                className='btn-resume-me'  rel="noreferrer" target="_blank"> Get Resume</a>
              </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className='d-flex justify-content-center custom-div-outer-img'>
            <img className='img-fluid custom-img' alt="heroimage" src="https://res.cloudinary.com/pundit-zone-limited/image/upload/v1643439330/portfolio_image_wmp8ip.png" 
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            ></img>
          </div>
        </div>
      </div>
    </div>
    <div className='about-me-section about-inside my-5'>
      <div className='d-flex flex-column'>
        <span className='about-me-text'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" id="aboutme"> About me </span>
        <span className='why-text-sub' > Why Choose me </span>
        <div className='row justify-content-center shadow-lg my-5' data-aos="zoom-in" data-aos-offset="200"
     data-aos-easing="ease-in-sine">
          <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center' >
          <lottie-player
            className="lottie-1"
            src="https://assets7.lottiefiles.com/packages/lf20_dmmkt8b9.json"  background="transparent"  speed="1"  
            // style={{width: "500px", height: "500px"}}  
            loop autoplay></lottie-player> 
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
            <span className='some-text-about-me'>
              Full Stack web and mobile developer with background knowledge in MERN stack with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.
            </span>

            <span className="few-highlights">
              <span className='few-text'>Here are few highlights</span>
              <span className='few-list'>
                <ul>
                  <li>Full stack web and mobile development</li>
                  <li>Interactive Front end as per the design</li>
                  <li>HTML, CSS, Bootstrap, Tailwind, Javascript, React.js, Node.js and JQuery.</li>
                  <li>Python, PHP, SQL, Django and Data Science</li>
                  <li>Wagtail, AWS, Docker, Github</li>
                </ul>
              </span>
            </span>
          </div>
        </div>

      </div>
    </div>
    <div className='resume-outer-section d-flex flex-column'>
      <span className='about-me-text' id="myresume" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Resume</span>
      <span className='why-text-sub' >My Formal Bio Details</span>
      <div className='resume-new-section row' style={{width:"70%",marginInline:"auto", height:"auto" }} 
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div className='col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row' >
          <div className='d-flex flex-column bg-new text-white'>
            <span className='icons-span'>
            <i className='fas fa-user-graduate'></i>{" "}
            </span>
            <span className='icons-span'>
            <i className='fas fa-briefcase'></i>{" "}
            </span>
            <span className='icons-span'>
            <i className='fas fa-code'></i>{" "}
            </span>
            <span className='icons-span'>
            <i className='fas fa-tasks'></i>{" "}
            </span>
          </div>

          <div className='d-flex flex-column'>
            <span 
              className={
                education ===false
                  ?'resume-options-items'
                  : 'selected resume-options-items'
            }
            onClick={()=> {
              ChangeState(seteducation, true);
            }}
            >
              Education{" "}
              </span>
            <span 
              className={
                workhistory ===false
                  ?'resume-options-items'
                  : 'selected resume-options-items'
            }
            onClick={()=> {
              ChangeState(setworkhistory, true);
            }}
            >
              Work{" "}
              </span>
            <span 
              className={
                programming ===false
                  ?'resume-options-items'
                  : 'selected resume-options-items'
            }
            onClick={()=> {
              ChangeState(setprogramming, true);
            }}
            >
              Programming{" "}
              </span>
            <span 
              className={
                projects ===false
                  ?'resume-options-items'
                  : 'selected resume-options-items'
            }
            onClick={()=> {
              ChangeState(setprojects, true);
            }}
            >
              Projects{" "}
              </span>
          </div>
        </div>
        <div className='col-lg-8 col-md-8 resume-right-section'>
          {education === true && <Education />}
          {workhistory === true && <Work />}
          {programming === true && <Programming />}
          {projects === true && <Projects />}
        </div>
      </div>
    </div>
    <div className='testimonials-part my-5'
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className='testimonials-inner-part d-flex flex-column'>
        <span className='about-me-text'>Testimonials</span>
        <span className='why-text-sub mb-5' id="mytestimonial">
          What my clients say about me {" "}
        </span>
        <Testimonials />
      </div>
    </div>
    <div className='contact-me-part py-'>
            <div className='relative-bg'></div>
            <div className='contact-inner-part d-flex flex-column'>
              <span className='about-me-text'>Contact Me</span>
              <span className='why-text-sub mb-5' id="contactme">Lets Keep in Touch</span>
              <Contact />
            </div>
    </div>

  </div>
  );
}
