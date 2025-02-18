import { FaCode } from 'react-icons/fa6';
import './TechCard.css'

// Default props list
const defaultProps = {
    text: "Tech Card",
    icon: <FaCode />
}

function TechCard(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className="techCard">
            <span className="tcIcon">{ props.icon }</span>
            <span className="tcText">{ props.text }</span>
        </div>
    )
}

export default TechCard;