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
      <Header title="Alex Chenot" navitems={
        [
          ["About", scrollTo('aboutSection')],
          ["Work", scrollTo('workSection')],
          ["Projects", scrollTo('projectSection')],
          ["Contact", scrollTo('contactSection')]]
      }/>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div id="cards">
          <TechContext.Provider value={{ tech: tech, setTech: setTech }}>
            <div id="aboutSection" style={{height:0,width:'100%'}}/>
            <Profile work={true}>
                I'm a software engineer who's interested in programming language theory and data systems. I find few things as rewarding as discovering a simple and effective solution to a complex problem.
            </Profile>
            <Technologies 
              display={[
                "rust",
                "py",
                "cpp",
                "js",
		"ocaml",
                "clisp",
                "sql",
                "react",
                "linux",
                "git"
              ]}
              title="My Favorite Technologies"/>
            <div id="workSection" style={{height:0}}/>
            <Divider text="My Jobs" />
            <Job
              title="Software Engineering Intern"
              from="May 2024"
              to="Present"
              company="Primoris Renewable Energy"
              technologies={["py","js","excel"]}
              link="https://www.prim.com/about/business-units/primoris-renewable-energy">
              I work on creating and modernizing automation processes for the design and construction of utility-scale solar installations.  
            </Job>
            <Job
              title="Lead Teaching Assistant"
              from="August 2024"
              to="Present"
              company="Colorado School of Mines"
              technologies={["ocaml","bash","js","py","git"]}
              link="https://www.mines.edu/">
              I facilitate significant grading processes and manage a GitHub organization with over 150 users and 50 repositories.
            </Job>
            <Job
              title="Junior Salesforce Developer"
              from="July 2018"
              to="September 2020"
              company="Colorado Governor's Office of IT"
              technologies={["sf","js","excel","sql"]}
              link="https://oit.colorado.gov/">
              I worked with clients and subject matter experts to develop public-facing Salesforce applications, and assisted with managing a number of Salesforce orgs for a variety of state agencies.
            </Job>
            <div id="projectSection" style={{height:0}}/>
            <Divider text="My Projects" />
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
                LispJS is a JavaScript interpreter written in the Common LISP programming language. It was through this project that I discovered the beauty (and occasional pain) of LISP programming.
            </Project>
            <Project 
              title="Portfolio Website"
              subtitle="Personal Project"
              link="https://github.com/chenota/chenota.github.io"
              technologies={["react"]}
              >
                You're using this website right now! I'm using React mostly as an organizational tool, but I've also added some neat features along the way.
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
