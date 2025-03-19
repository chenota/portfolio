import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'

import { FaRust, FaPython, FaJs, FaReact, FaLinux } from 'react-icons/fa6';
import { TbBrandCpp, TbLambda } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import { SiGnubash } from 'react-icons/si';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

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
            technologies={[
              ["Rust", <FaRust />],
              ["Linux", <FaLinux />],
            ]}
            >
              AlexC is a compiled programming language that targets x86-64 assembly.
          </Project>
        </div>
      </div>
    </>
  )
}

export default App
