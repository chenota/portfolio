import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Technologies from './components/Technologies/Technologies'

function App() {
  return (
    <>
      <Header />
      <div id="cards">
        <Profile work={true}/>
        <Technologies />
      </div>
    </>
  )
}

export default App
