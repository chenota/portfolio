import './Header.css'
import NavItem from '../NavItem/NavItem';

function Header() {
    // Componenet body
    return (
        <div className="header">
            <h1>Alex Chenot (WIP)</h1>
            <div className="headerLinks">
                <NavItem text="About"/>
                <NavItem text="Work" />
                <NavItem text="Projects" />
                <NavItem text="Contact" />
            </div>
        </div>
      )
}

export default Header;