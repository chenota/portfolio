import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'
import Project from './components/Project/Project'

function App() {
  return (
    <>
      <Header />
      <div id="cards">
        <Profile work={true}/>
        <Technologies />
        <Project title="Test Project"/>
      </div>
    </>
  )
}

export default App
