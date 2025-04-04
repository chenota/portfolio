import './Header.css'
import React from 'react'

const defaultProps = {
    navitems:[],
    title:"Alex Chenot"
}

function Header(props) {
    props = {
        ...defaultProps,
        ...props
    }
    // Main page scroll state
    const [scrolled, setScrolled] = React.useState(false);
    // UseEffect hook to add event listener
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    })
    // Componenet body
    return (
        <div className={"header" + (scrolled ? " withBottomBorder" : "")}>
            <h1 className="headerTitle">{props.title}</h1>
            <div className="headerLinks">
                { 
                    props.navitems.map(([text, scrollfn], key) => <div className="link black" onClick={scrollfn} key={key}>{text}</div>)
                }
            </div>
        </div>
      )
}

export default Header;