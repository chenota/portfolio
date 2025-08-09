import './Job.css'
import TechCard from '../TechCard/TechCard';

const defaultProps = {
    title: "Job",
    company: "Company",
    children: "Some description",
    link: "https://www.google.com",
    technologies: ["rust"]
}

function Job(props) {
    // Setup props
    props = {
        ...defaultProps,
        ...props
    };
    // Component
    return (
        <div className="container flexCol">
            <div>
                <h2>{props.title}</h2>
                <div className="">
                    <a className="subtitle header-align link" href={props.link}>{props.company}</a>
                </div>
            </div>
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

export default Job;