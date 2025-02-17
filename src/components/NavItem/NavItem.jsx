// Default props list
const defaultProps = {
    text: "NavItem"
}

function NavItem(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <a href='#'>{props.text}</a>
    )
}

export default NavItem;