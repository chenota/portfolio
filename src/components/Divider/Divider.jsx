import './Divider.css'

// Default props list
const defaultProps = {
    text: "Divider"
}
function Divider(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Componenet body
    return (
        <div className="divider">
            <h1>{props.text}</h1>
        </div>
      )
}

export default Divider;