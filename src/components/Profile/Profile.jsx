import { FaLocationDot } from 'react-icons/fa6';
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
                {/*<img src="/square.svg" alt="Profile Picture" className="imgRounded" />*/}
                <h1>Hi, I'm Alex <span className="wave">👋</span></h1>
            </div>
            <div>{props.children}</div>
            <div className="sbs sbsApart">
                <div className={props.work ? "textGlow textGreen" : "textGlow textYellow"}>• {props.work ? "Open to Work" : "Happily Employed!"}</div>
                <div><FaLocationDot /> Denver, CO</div>
            </div>
        </div>
    )
}

export default Profile;