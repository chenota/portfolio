import TechCard from '../TechCard/TechCard';
import './Technologies.css';
import { cards } from '../../constant';

const defaultProps = {
    display: [""],
    title: "My Favorite Languages and Technologies"
}

function Technologies(props) {
    props = {
        ...defaultProps,
        ...props
    }
    // Component
    return (
        <div className="container flexCol">
            <h2>{props.title}</h2>
            <div className="icons">
                {
                    props.display.map((key) => <TechCard cardStyle={key} key={key} />)
                }
            </div>
        </div>
    );
};

export default Technologies;