import './Project.css'
import { FaGithub } from 'react-icons/fa6';
import TechCard from '../TechCard/TechCard';
import { cards } from '../../constant';

const defaultProps = {
    title: "Project",
    subtitle: "Subtitle",
    link: "https://www.github.com/chenota",
    children: "Some text about the project.",
    technologies: ["rust"]
}

function Project(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className="container flexCol">
            <h2 style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:20}}>
                <span>{props.title}</span>
                <a className="link shakeyHover" href={props.link}><FaGithub /></a>
            </h2>
            <div>
                {props.children}
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:5}}>
                {
                    props.technologies.map((key) => <TechCard cardStyle={key} key={key} />)
                }
            </div>
            
        </div>
    )
}

export default Project;