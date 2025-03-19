import TechCard from '../TechCard/TechCard';
import './Technologies.css';
import { cards } from '../../constant';

function Technologies() {
    // Component
    return (
        <div className="container flexCol">
            <h1>Technologies I Use</h1>
            <div className="icons">
                {
                    Object.keys(cards).map((key) => <TechCard text={cards[key][0]} icon={cards[key][1]} key={key} />)
                }
            </div>
        </div>
    );
};

export default Technologies;