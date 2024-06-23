import { FunctionComponent, ReactElement } from 'react';

import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { FaBitbucket } from "@react-icons/all-files/fa/FaBitbucket";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaPhp } from "@react-icons/all-files/fa/FaPhp";
import { FiAlertCircle } from "@react-icons/all-files/fi/FiAlertCircle";
import { RiVuejsLine } from "@react-icons/all-files/ri/RiVuejsLine";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiNuxtDotJs } from "@react-icons/all-files/si/SiNuxtDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiPrismic } from "@react-icons/all-files/si/SiPrismic";
import { SiVisualstudiocode } from "@react-icons/all-files/si/SiVisualstudiocode";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";

import { HiDesktopComputer } from "@react-icons/all-files/hi/HiDesktopComputer";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { HiSun } from "@react-icons/all-files/hi/HiSun";

import { FaCloudsmith } from "@react-icons/all-files/fa/FaCloudsmith";
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen";


import { AiOutlineLink } from "@react-icons/all-files/ai/AiOutlineLink";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { MdClose } from "@react-icons/all-files/md/MdClose";


import { BsBoundingBoxCircles } from "@react-icons/all-files/bs/BsBoundingBoxCircles";
import { BsFillBarChartFill } from "@react-icons/all-files/bs/BsFillBarChartFill";
import { BsShieldLockFill } from "@react-icons/all-files/bs/BsShieldLockFill";
import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { AiFillMediumSquare } from "@react-icons/all-files/ai/AiFillMediumSquare";

type IconProps = {
    icon: string;
    className?: string;
    size?: number;
    tooltip?: boolean;
    withoutStyle?: boolean;
}

const Icon: FunctionComponent<IconProps> = ({
    icon,
    className = "",
    size = 5,
    withoutStyle = false
}: IconProps): ReactElement => {
    const classes =
        withoutStyle ?
            `h-${size} w-${size} ${className} `
            :
            `${className} p-2 h-10 w-10 flex-shrink-0 rounded-lg text-indigo-800 
                dark:text-indigo-300 bg-indigo-100 dark:bg-gray-800 `

    let found = true;

    const getIcon = (name = ""): { component: ReactElement, tooltip: string } => {
        switch (name) {
            case "arrowdown":
                return {
                    component: <MdKeyboardArrowDown className={classes} />,
                    tooltip: "",
                }
                break;
            case "medium":
                return {
                    component: <AiFillMediumSquare className={classes} />,
                    tooltip: "Medium",
                }
                break;
            case "pdf":
                return {
                    component: <AiOutlineFilePdf className={classes} />,
                    tooltip: "",
                }
                break;
            case "bar_chart":
                return {
                    component: <BsFillBarChartFill className={classes} />,
                    tooltip: "",
                }
                break;
            case "prisma":
                return {
                    component: <SiPrismic className={classes} />,
                    tooltip: "",
                }
                break;
            case "shield_lock":
                return {
                    component: <BsShieldLockFill className={classes} />,
                    tooltip: "",
                }
                break;
            case "box_circles":
                return {
                    component: <BsBoundingBoxCircles className={classes} />,
                    tooltip: "",
                }
                break;
            case "link":
                return {
                    component: <AiOutlineLink className={classes} />,
                    tooltip: "",
                }
                break;
            case "close":
                return {
                    component: <MdClose className={classes} />,
                    tooltip: "",
                }
                break;
            case "menu":
                return {
                    component: <GiHamburgerMenu className={classes} />,
                    tooltip: "",
                }
                break;
            case "code":
                return {
                    component: <FaCodepen className={classes} />,
                    tooltip: "",
                }
                break;
            case "cloud":
                return {
                    component: <FaCloudsmith className={classes} />,
                    tooltip: "",
                }
                break;
            case "envelope":
                return {
                    component: <FaEnvelope className={classes} />,
                    tooltip: "",
                }
                break;
            case "instagram":
                return {
                    component: <FiInstagram className={classes} />,
                    tooltip: "Instagram",
                }
                break;
            case "youtube":
                return {
                    component: <FaYoutube className={classes} />,
                    tooltip: "Youtube",
                }
                break;
            case "github":
                return {
                    component: <FaGithub className={classes} />,
                    tooltip: "Github",
                }
                break;
            case "linkedin":
                return {
                    component: <FaLinkedin className={classes} />,
                    tooltip: "Linkedin",
                }
                break;
            case "java":
                return {
                    component: <FaJava className={classes} />,
                    tooltip: "Java",
                }
                break;
            case "php":
                return {
                    component: <FaPhp className={classes} />,
                    tooltip: "Php",
                }
                break;
            case "bitbucket":
                return {
                    component: <FaBitbucket className={classes} />,
                    tooltip: "Bitbucket",
                }
                break;
            case "mongo":
                return {
                    component: <DiMongodb className={classes} />,
                    tooltip: "Mongo DB",
                }
                break;
            case "html":
                return {
                    component: <SiHtml5 className={classes} />,
                    tooltip: "Html",
                }
                break;
            case "css":
                return {
                    component: <SiCss3 className={classes} />,
                    tooltip: "Css",
                }
                break;
            case "netlify":
                return {
                    component: <SiNetlify className={classes} />,
                    tooltip: "etlify",
                }
                break;
            case "heroku":
                return {
                    component: <SiHeroku className={classes} />,
                    tooltip: "Heroku",
                }
                break;
            case "visualstudiocode":
                return {
                    component: <SiVisualstudiocode className={classes} />,
                    tooltip: "Visual Studio Code",
                }
                break;
            case "nuxtjs":
                return {
                    component: <SiNuxtDotJs className={classes} />,
                    tooltip: "nuxtjs",
                }
                break;
            case "vuejs":
                return {
                    component: <RiVuejsLine className={classes} />,
                    tooltip: "Vue Js",
                }
                break;
            case "moon":
                return {
                    component: <HiMoon className={classes} />,
                    tooltip: "",
                }
                break;
            case "sun":
                return {
                    component: <HiSun className={classes} />,
                    tooltip: "",
                }
                break;
            case "desktop":
                return {
                    component: <HiDesktopComputer className={classes} />,
                    tooltip: "",
                }
                break;
            case "nodejs":
                return {
                    component: <FaNodeJs className={classes} />,
                    tooltip: "Node Js",
                }
                break;
            case "tailwindcss":
                return {
                    component: <SiTailwindcss className={classes} />,
                    tooltip: "Tailwind CSS",
                }
                break;
            case "nextjs":
                return {
                    component: <SiNextDotJs className={classes} />,
                    tooltip: "Next Js",
                }
                break;
            case "javascript":
                return {
                    component: <SiJavascript className={classes} />,
                    tooltip: "Javascript",
                }
                break;
            case "typescript":
                return {
                    component: <SiTypescript className={classes} />,
                    tooltip: "Typescript",
                }
                break;
            case "laravel":
                return {
                    component: <SiLaravel className={classes} />,
                    tooltip: "Laravel",
                }
                break;
            case "react":
                return {
                    component: <SiReact className={classes} />,
                    tooltip: "React Js",
                }
                break;
            case "html":
                return {
                    component: <SiHtml5 className={classes} />,
                    tooltip: "Redux",
                }
                break;
            default:
                found = false;
                return {
                    component: <FiAlertCircle className={classes} />,
                    tooltip: "Default",
                }
                break;
        }
    }

    return <>
        {getIcon(icon).component}
        {!found && icon}
    </>
}

export default Icon;