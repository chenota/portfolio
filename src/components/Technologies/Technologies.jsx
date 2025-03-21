import TechCard from '../TechCard/TechCard';
import './Technologies.css';
import { cards } from '../../constant';

function Technologies() {
    // Component
    return (
        <div className="container flexCol">
            <h2>Technologies I Use</h2>
            <div className="icons">
                {
                    Object.keys(cards).map((key) => <TechCard cardStyle={key} key={key} />)
                }
            </div>
        </div>
    );
};

export default Technologies;