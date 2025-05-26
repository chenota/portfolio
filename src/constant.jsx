import { FaRust, FaPython, FaJs, FaReact, FaLinux, FaGears, FaGit, FaSalesforce, FaGolang } from 'react-icons/fa6';
import { TbBrandCpp, TbLambda } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import { SiGnubash, SiOcaml } from 'react-icons/si';
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
    git:["Git", <FaGit />],
    ocaml:["OCaml", <SiOcaml />],
    sf:["Salesforce", <FaSalesforce />],
    go:["Golang", <FaGolang />]
};