import TechCard from '../TechCard/TechCard';
import './Technologies.css';
import { cards } from '../../constant';

function Technologies() {
    // Component
    return (
        <div className="container flexCol">
            <h2>My Favorite Technologies</h2>
            <div className="icons">
                {
                    Object.keys(cards).map((key) => <TechCard cardStyle={key} key={key} />)
                }
            </div>
        </div>
    );
};

export default Technologies;