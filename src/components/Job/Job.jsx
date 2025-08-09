import './Job.css'
import TechCard from '../TechCard/TechCard';
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

const defaultProps = {
    title: "Job",
    company: "Company",
    children: "Some description",
    link: "https://www.google.com",
    technologies: ["rust"],
    startDate: "0000-01-01",
    endDate: undefined,
}

function timeBetweenDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    if(end < start) return undefined
    
    const years = differenceInYears(end, start)

    if(years <= 0) {
        const months = differenceInMonths(end, start)
        if(months <= 0) {
            return `${differenceInDays(end, start)} d`
        }
        return `${months} ${months == 1 ? 'mo' : 'mos'}`
    }

    return `${years} ${years == 1 ? 'yr' : 'yrs'}`
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
                    <span><a className="link" href={props.link}>{props.company}</a></span>
                    <span>{timeBetweenDates(props.startDate, props.endDate)}</span>
                    <span>{props.endDate ? "Prior" : "Current"}</span>
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