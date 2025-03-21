import './Header.css'

const defaultProps = {
    navitems:[]
}

function Header(props) {
    props = {
        ...defaultProps,
        ...props
    }
    // Componenet body
    return (
        <div className="header">
            <h1>Alex Chenot (WIP)</h1>
            <div className="headerLinks">
                {
                    props.navitems.map(([text, scrollfn], key) => <div className="link" onClick={scrollfn} key={key}>{text}</div>)
                }
            </div>
        </div>
      )
}

export default Header;