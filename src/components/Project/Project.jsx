import './Project.css'
import { FaGithub } from 'react-icons/fa6';
import TechCard from '../TechCard/TechCard';

const defaultProps = {
    title: "Project",
    link: "https://www.github.com/chenota",
    children: "Some text about the project.",
    technologies: [
        ["Some Text", <FaGithub/>],
        ["Some Text", <FaGithub/>],
        ["Some Text", <FaGithub/>],
        ["Some Text", <FaGithub/>],
        ["Some Text", <FaGithub/>]
    ]
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
            <h1 style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:20}}>
                <span>{props.title}</span>
                <a href={props.link}><FaGithub /></a>
            </h1>
            <div>
                {props.children}
            </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:5}}>
                    {
                        props.technologies.map(([txt, ico], idx) => {
                            return <TechCard text={txt} icon={ico} key={idx} />
                        })
                    }
                </div>
            
        </div>
    )
}

export default Project;