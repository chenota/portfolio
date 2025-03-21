import { FaLocationDot } from 'react-icons/fa6';
import './ContactLink.css'

const defaultProps = {
    icon: <FaLocationDot />,
    title: "Place",
    link: "https://www.google.com/",
    linkname: "Link"
}

function ContactLink(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <a className="linkCard" href={props.link}>
            <span className="linkIcon">{props.icon}</span>
            <span className="linkText">{props.title}/{props.linkname}</span>
        </a>
    )
}

export default ContactLink;