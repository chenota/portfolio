import './Project.css'
import { FaGithub } from 'react-icons/fa6';
import TechCard from '../TechCard/TechCard';

const defaultProps = {
    title: "Project",
    link: "https://www.github.com/chenota",
    img: "/square.svg",
    children: "Some text about the project.",
    technologies: []
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
            <h1 style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center',gap:20}}>
                <span>{props.title}</span>
                <a href={props.link}><FaGithub /></a>
            </h1>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:20}}>
                <img src={props.img} />
                <div>
                    {props.children}
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:20}}>
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