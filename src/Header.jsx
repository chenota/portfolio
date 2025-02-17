import './Header.css'
import NavItem from './NavItem';

function Header() {
    return (
        <div id="header">
            <h1>Alex Chenot</h1>
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