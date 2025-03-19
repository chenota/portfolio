import './Header.css'
import NavItem from '../NavItem/NavItem';
import { useState } from 'react'

function Header() {
    // Is the header currently rainbow?
    const [ isRainbowHeader, setRainbowHeader ] = useState(false);
    // Function to toggle rainbow header back and forth
    const toggleRainbowHeader = () => {
        setRainbowHeader(!isRainbowHeader)
    }
    // Componenet body
    return (
        <div id="header">
            <h1 onClick={toggleRainbowHeader} className={"select" + (isRainbowHeader ? " rainbow" : "")}>Alex Chenot (Under Construction)</h1>
            <div id="headerLinks">
                <NavItem text="About"/>
                <NavItem text="Work" />
                <NavItem text="Projects" />
                <NavItem text="Contact" />
            </div>
        </div>
      )
}

export default Header;