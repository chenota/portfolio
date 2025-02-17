import { FaLocationDot } from 'react-icons/fa6';
import './Profile.css'

const defaultProps = {
    work: false
}

function Profile(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div id="profileMain">
            <div className="sbs sbsLarge">
                <img src="/icon.svg" alt="Profile Picture" className="imgRounded" />
                <h1>Hi, I'm Alex <span className="wave">👋</span></h1>
            </div>
            <div>Software developer with an interest in compiler design and data systems.</div>
            <div className="sbs sbsApart">
                <div className={props.work ? "textGlow textGreen" : "textGlow textYellow"}>• {props.work ? "Open to Work" : "Happily Employed!"}</div>
                <div><FaLocationDot /> Denver, CO</div>
            </div>
        </div>
    )
}

export default Profile;