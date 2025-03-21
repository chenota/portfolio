import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'

import { FaRust, FaGears, FaLinux } from 'react-icons/fa6';

function App() {
  return (
    <>
      <Header />
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div id="cards">
          <Profile work={true}/>
          <Technologies />
          <Project 
            title="AlexC"
            link="https://www.github.com/chenota/alexc"
            technologies={["rust", "linux", "x86", "git"]}
            >
              AlexC is a compiled programming language that targets x86-64 assembly.
          </Project>
          <Project 
            title="AlexDB"
            link="https://www.github.com/chenota/alexdb"
            technologies={["rust", "linux", "sql", "git"]}
            >
              AlexDB is a relational database system that integrates a programming language into SQL queries. To make AlexDB, I designed and implemented my own programming language, the database engine, and data compression schemes for efficient storage.
          </Project>
          <Project 
            title="LispJS"
            link="https://www.github.com/chenota/lisp-js"
            technologies={["clisp", "linux", "js", "git"]}
            >
              LispJS is a JavaScript interpreter written in the Common LISP programming language. The LispJS interpreter can run JS files or be used in REPL mode.
          </Project>
        </div>
      </div>
    </>
  )
}

export default App
