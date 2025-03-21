import './Header.css'

const defaultProps = {
    navitems:[],
    title:"Alex Chenot"
}

function Header(props) {
    props = {
        ...defaultProps,
        ...props
    }
    // Componenet body
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <div className="headerLinks">
                { 
                    props.navitems.map(([text, scrollfn], key) => <div className="link" onClick={scrollfn} key={key}>{text}</div>)
                }
            </div>
        </div>
      )
}

export default Header;