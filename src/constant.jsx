import { FaRust, FaPython, FaJs, FaReact, FaLinux, FaGears, FaGit } from 'react-icons/fa6';
import { TbBrandCpp, TbLambda } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import { SiGnubash } from 'react-icons/si';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

export const cards = {
    rust:["Rust", <FaRust />],
    cpp:["C/C++", <TbBrandCpp />],
    py:["Python", <FaPython />],
    js:["JavaScript", <FaJs />],
    bash:["Bash", <SiGnubash />],
    react:["React", <FaReact />],
    clisp:["Com. LISP", <TbLambda />],
    sql:["SQL", <BsFiletypeSql />],
    linux:["Linux", <FaLinux />],
    excel:["Excel", <PiMicrosoftExcelLogo /> ],
    x86:["x86 ASM", <FaGears />],
    git:["Git(hub)", <FaGit />]
};