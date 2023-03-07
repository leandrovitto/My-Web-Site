import clsx from "clsx";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { FunctionComponent, ReactElement } from 'react';
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku";
import { SiVisualstudiocode } from "@react-icons/all-files/si/SiVisualstudiocode";
import { SiNuxtDotJs } from "@react-icons/all-files/si/SiNuxtDotJs";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { RiVuejsLine } from "@react-icons/all-files/ri/RiVuejsLine";


interface IconItem {
    icon: any,
    rotate: string,
    color: string,
    orbit: string
}

const icons: IconItem[] = [
    {
        icon: SiNetlify,
        rotate: "rotate-0",
        color: "text-teal-500",
        orbit: "100"
    },
    {
        icon: SiHeroku,
        rotate: "rotate-90",
        color: "text-pink-500",
        orbit: "100"
    },
    {
        icon: DiMongodb,
        rotate: "-rotate-90",
        color: "text-pink-700",
        orbit: "100"
    },
    {
        icon: SiVisualstudiocode,
        rotate: "rotate-[255deg]",
        color: "text-blue-800",
        orbit: "80"
    },
    {
        icon: SiTypescript,
        rotate: "rotate-0",
        color: "text-blue-700",
        orbit: "80"
    },
    {
        icon: RiVuejsLine,
        rotate: "rotate-180",
        color: "text-green-600",
        orbit: "80"
    },
    {
        icon: SiNuxtDotJs,
        rotate: "rotate-[225deg]",
        color: "text-green-800",
        orbit: "60"
    },
    {
        icon: SiReact,
        rotate: "rotate-90",
        color: "text-blue-500",
        orbit: "60"
    },
    {
        icon: SiCss3,
        rotate: "rotate-[325deg]",
        color: "text-yellow-500",
        orbit: "60"
    },
    {
        icon: FaNodeJs,
        rotate: "rotate-0",
        color: "text-green-500",
        orbit: "40"
    },
    {
        icon: SiLaravel,
        rotate: "rotate-180",
        color: "text-red-500",
        orbit: "40"
    },
    {
        icon: SiJavascript,
        rotate: "-rotate-90",
        color: "text-yellow-500",
        orbit: "20"
    },
    {
        icon: SiTailwindcss,
        rotate: "rotate-[225deg]",
        color: "text-blue-600",
        orbit: "100"
    },
    {
        icon: SiNextDotJs,
        rotate: "rotate-[145deg]",
        color: "text-gray-800",
        orbit: "100"
    },
    {
        icon: SiHtml5,
        rotate: "rotate-[115deg]",
        color: "text-orange-600",
        orbit: "80"
    }
]

const Galaxy = () => {
    const classGalaxy = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    const classOrbit = "h-full w-full border-2 border-blue-500 rounded-full"

    return <>
        <div className={clsx(classGalaxy, "w-[100%]", "h-[100%]")} >
            <div className={classOrbit}></div>
        </div>
        <div className={clsx(classGalaxy, "w-[80%]", "h-[80%]")} >
            <div className={classOrbit}></div>
        </div>
        <div className={clsx(classGalaxy, "w-[60%]", "h-[60%]")} >
            <div className={classOrbit}></div>
        </div>
        <div className={clsx(classGalaxy, "w-[40%]", "h-[40%]")} >
            <div className={classOrbit}></div>
        </div>
        <div className={clsx(classGalaxy, "w-[20%]", "h-[20%]")} >
            <div className={classOrbit}></div>
        </div>
    </>
}

type Props = {
    animate?: boolean
}

const SolarSystem: FunctionComponent<Props> = ({ animate = true }: Props): ReactElement => {

    const classOrbitIcon = (orbit: string, rotate: string): string => `absolute ${rotate} w-[${orbit}%] h-[${orbit}%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`
    const classContainerIcon = (orbit: string) => {
        let speed = 10;
        if (orbit === "100" || orbit === "40") {
            speed = 20;
        } else if (orbit === "80" || orbit === "20") {
            speed = 15;
        }
        return `h-full w-full animate-spin-${speed} rounded-full`
    }
    const classIcon = "absolute -top-5 left-[50%] translate-x-[-50%] h-6 w-6 md:h-8 md:w-8 bg-white dark:bg-gray-900";

    return <div className="flex-1 relative aspect-square w-full p-4">
        <div className="w-full aspect-square relative">
            <Galaxy />

            {icons.map((item, idx) => {
                return <div key={idx} className={clsx(classOrbitIcon(item.orbit, item.rotate))} >
                    <div className={clsx(classContainerIcon(item.orbit))} >
                        <item.icon className={clsx(classIcon, item.color)} />
                    </div>
                </div>
            })}

            <div className="absolute h-full w-full flex items-center justify-center">
                <SiJavascript className="h-6 w-6 md:h-8 md:w-8" />
            </div>
        </div >
    </div>
}


export default SolarSystem;