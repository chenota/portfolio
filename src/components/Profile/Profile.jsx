import { FaLocationDot, FaBriefcase } from 'react-icons/fa6';
import './Profile.css'

const defaultProps = {
    work: false,
    children: "Something about something"
}

function Profile(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className="container flexCol">
            <div className="sbs sbsLarge">
                <h2>Hi, I'm Alex <span className="wave">👋</span></h2>
            </div>
            <div>{props.children}</div>
            <div className="sbs sbsApart">
                <div><FaBriefcase /> {props.work ? "" : "Not"} Looking for Work</div>
                <div><FaLocationDot /> Denver, CO</div>
            </div>
        </div>
    )
}

export default Profile;