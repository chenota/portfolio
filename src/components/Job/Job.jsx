import './Job.css'
import TechCard from '../TechCard/TechCard';

const defaultProps = {
    title: "Job",
    from: "Date",
    to: "Date",
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
                <div className="subtitle header-align">
                    <a className="link" href={props.link}>{props.company}</a>
                    <div style={{height:"1rem",borderLeft:"1px solid darkslategray"}}></div>
                    <span>{props.from} - {props.to}</span>
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