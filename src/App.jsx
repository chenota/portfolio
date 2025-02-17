import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <>
      <Header />
      <div id="cards">
        <Profile work={true}/>
      </div>
    </>
  )
}

export default App
