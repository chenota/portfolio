import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'
import React from 'react'
import Job from './components/Job/Job'
import Divider from './components/Divider/Divider'

export const TechContext = React.createContext([]);

function App() {
  const [tech, setTech] = React.useState([]);
  return (
    <>
      <Header />
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div id="cards">
          <TechContext.Provider value={{ tech: tech, setTech: setTech }}>
            <Profile work={true}/>
            <Technologies />
            <Divider text="Work" />
            <Job
              title="Software Engineering Intern"
              from="May 2024"
              to="Present"
              company="Primoris Renewable Energy"
              technologies={["py","js","excel"]}
              link="https://www.prim.com/about/business-units/primoris-renewable-energy">
              I work on creating and modernizing software automation processes for the design and construction of utility-scale solar installations.  
            </Job>
            <Job
              title="Lead Teaching Assistant"
              from="August 2024"
              to="Present"
              company="Colorado School of Mines"
              technologies={["ocaml","bash","js","git"]}
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
              I worked closely with clients to develop public-facing Salesforce applications, and assisted with managing a number of Salesforce orgs for a variety of other agencies.
            </Job>
            <Divider text="Projects" />
            <Project 
              title="AlexC"
              link="https://www.github.com/chenota/alexc"
              technologies={["rust", "linux", "x86", "git"]}
              >
                AlexC is a C-like programming language that targets x86-64 assembly.
            </Project>
            <Project 
              title="AlexDB"
              link="https://www.github.com/chenota/alexdb"
              technologies={["rust", "linux", "sql", "git"]}
              >
                AlexDB is a made-from-scratch relational database system that integrates a functional programming language into SQL queries.
            </Project>
            <Project 
              title="LispJS"
              link="https://www.github.com/chenota/lisp-js"
              technologies={["clisp", "linux", "js", "git"]}
              >
                LispJS is a JavaScript interpreter written in the Common LISP programming language. The LispJS interpreter can run JS files or be used in REPL mode.
            </Project>
            <Project 
              title="Portfolio Website"
              link="https://github.com/chenota/chenota.github.io"
              technologies={["react"]}
              >
                This is the website you're on right now! I built this website using React which started out as an organizational tool, but features like state have turned out to be very useful.
            </Project>
            <Divider text="Contact" />
          </TechContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App