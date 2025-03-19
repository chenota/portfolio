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
            technologies={["rust", "linux", "x86"]}
            >
              AlexC is a compiled programming language that targets x86-64 assembly.
          </Project>
        </div>
      </div>
    </>
  )
}

export default App
