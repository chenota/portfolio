import './Contact.css'
import ContactLink from '../ContactLink/ContactLink';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const defaultProps = {
    work: false
}

function Contact(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className="container flexCol">
            <h2>My Links</h2>
            <div className="links">
                <ContactLink icon={<FaLinkedin />} title="LinkedIn" linkname="alex-chenot" link="https://www.linkedin.com/in/alex-chenot"/>
                <ContactLink icon={<FaGithub />} title="GitHub" linkname="chenota" link="https://www.github.com/chenota"/>
            </div>
        </div>
    )
}

export default Contact;