import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'
import React from 'react'

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
          </TechContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App