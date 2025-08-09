import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'
import React from 'react'
import Job from './components/Job/Job'
import Divider from './components/Divider/Divider'
import Contact from './components/Contact/Contact'

export const TechContext = React.createContext([]);

function App() {
  // State for highlighting tech cards
  const [tech, setTech] = React.useState([]);
  // Refs to div elements
  const aboutRef = React.useRef(null);
  // Scroll to invisible div with id
  const scrollTo = (ref) => {
    return () => {
      const eltPosition = document.querySelector(`#${ref}`).getBoundingClientRect().top;
      const headerOffset = document.querySelector(`.header`).getBoundingClientRect().height;
      window.scrollTo({
        top: eltPosition + window.pageYOffset - headerOffset,
        behavior:'smooth'
      })
    }
  }
  return (
    <>
      <Header title="Alex's Website" navitems={
        [
          ["About", scrollTo('aboutSection')],
          ["Work", scrollTo('workSection')],
          ["Projects", scrollTo('projectSection')],
          ["Contact", scrollTo('contactSection')]]
      }/>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div id="cards">
          <TechContext.Provider value={{ tech: tech, setTech: setTech }}>
            <div id="aboutSection" style={{height:0}}/>
            <Profile work={false}>
              Welcome to my website! I'm a software engineer with an interest in exploring programming language theory and data systems. 
            </Profile>
            <Technologies 
              display={[
                "rust",
                "clisp",
                "linux",
              ]}
              title="My Favorite Technologies"/>
            <div id="workSection" style={{height:0}}/>
            <Divider text="My Jobs" />
            <Job
              title="Junior Software Engineer"
              company="bet365"
              technologies={["go","cloud"]}
              link="https://help.nj.bet365.com/us/about-us"
              startDate="2025-05">
              I work on high-performance and scalable cloud infrastructure at bet365.
            </Job>
            <Job
              title="Software Engineering Intern"
              company="Primoris Renewable Energy"
              technologies={["py","js","excel"]}
              link="https://www.prim.com/about/business-units/primoris-renewable-energy"
              startDate="2024-05"
              endDate="2025-05">
              I worked on designing, implementing, and modernizing automation processes for the design and construction of utility-scale solar installations.  
            </Job>
            <Job
              title="Lead Teaching Assistant"
              company="Colorado School of Mines"
              technologies={["ocaml","bash","js","py","git"]}
              link="https://www.mines.edu/"
              startDate="2024-08"
              endDate="2025-05">
              I organized and often automated large-scale grading efforts and managed a GitHub organization with over 150 users.
            </Job>
            <Job
              title="Junior Salesforce Developer"
              company="Colorado Governor's Office of IT"
              technologies={["sf","js","excel","sql"]}
              link="https://oit.colorado.gov/"
              startDate="2018-07"
              endDate="2020-09">
              I worked with a diverse set of clients and subject matter experts to develop Salesforce applications and helped manage a large number of Salesforce orgs.
            </Job>
            <div id="projectSection" style={{height:0}}/>
            <Divider text="My Projects" />
            <Project 
              title="LispNet"
              subtitle="Personal Project"
              link="https://www.github.com/chenota/lispnet"
              technologies={["clisp"]}
              >
                LispNet is a network library for Common Lisp. I've just recently started this project so there's not much there yet, and in the future I intend for LispNet to serve as a strong foundation for other cool projects.
            </Project>
            <Project 
              title="AlexC"
              subtitle="Personal Project"
              link="https://www.github.com/chenota/alexc"
              technologies={["rust", "cpp", "x86"]}
              >
                AlexC is a C-like programming language that targets x86-64 assembly. I intended for AlexC to be a quick half-semester project, but it turns out that writing a compiler from scratch takes awhile - who would've thought?
            </Project>
            <Project 
              title="AlexDB"
              subtitle="Class Project for Advanced Data Systems"
              link="https://www.github.com/chenota/alexdb"
              technologies={["rust", "sql"]}
              >
                AlexDB is a made-from-scratch relational database system that integrates a functional programming language into SQL queries. AlexDB is my first (and certainly not last) foray into database programming, and it is by far my favorite class project I've ever completed.
            </Project>
            <Project 
              title="LispJS"
              subtitle="Personal Project"
              link="https://www.github.com/chenota/lisp-js"
              technologies={["clisp", "js"]}
              >
                LispJS is a JavaScript interpreter written in the Common Lisp programming language. It was through this project that I discovered the beauty (and occasional pain) of Lisp programming.
            </Project>
            <Project 
              title="Portfolio Website"
              subtitle="Personal Project"
              link="https://github.com/chenota/chenota.github.io"
              technologies={["react","js"]}
              >
                You're using this website right now! I'm using React mostly as an organizational tool, but I've also used it to create some neat features.
            </Project>
            <div id="contactSection" style={{height:0}}/>
            <Divider text="Let's get in Touch!" />
            <Contact />
          </TechContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
