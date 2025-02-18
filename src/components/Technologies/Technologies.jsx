import { FaRust, FaPython, FaJs, FaReact, FaLinux } from 'react-icons/fa6';
import { TbBrandCpp, TbLambda } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import TechCard from '../TechCard/TechCard';
import './Technologies.css'
import { SiGnubash } from 'react-icons/si';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';


const techCards = [
    ["Rust", <FaRust />],
    ["C/C++", <TbBrandCpp />],
    ["Python", <FaPython />],
    ["JavaScript", <FaJs />],
    ["Bash", <SiGnubash />],
    ["React", <FaReact />],
    ["Common LISP", <TbLambda />],
    ["SQL", <BsFiletypeSql />],
    ["Linux", <FaLinux />],
    ["Excel", <PiMicrosoftExcelLogo /> ]
]

function Technologies() {
    // Component
    return (
        <div id="techMain">
            <h1> Technologies I Use </h1>
            <div className="icons">
                {
                    techCards.map(([txt, ico], idx) => {
                        return <TechCard text={txt} icon={ico} key={idx} />
                    })
                }
            </div>
        </div>
    )
}

export default Technologies;