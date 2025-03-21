import { TechContext } from '../../App';
import React from 'react'
import { cards } from '../../constant';
import './TechCard.css'

// Default props list
const defaultProps = {
    cardStyle: "rust",
}

function TechCard(props) {
    // Shared tech context
    const { tech, setTech } = React.useContext(TechContext);
    // Function to change state
    const clicked = () => {
        // Index of card style in tech array
        const idx = tech.indexOf(props.cardStyle);
        // Check if exists in tech list
        if(idx != -1) {
            setTech(tech.filter(x =>
                x != props.cardStyle
            ))
        } else {
            setTech([
                ...tech,
                props.cardStyle
            ])
        }
    }
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className={"techCard " + ((tech.length > 0 && tech.indexOf(props.cardStyle) == -1) ? "inactive" : "active" )} onClick={clicked}>
            <span className="tcIcon">{ cards[props.cardStyle][1] }</span>
            <span className="tcText">{ cards[props.cardStyle][0] }</span>
        </div>
    )
}

export default TechCard;