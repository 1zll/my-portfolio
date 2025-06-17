import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaPhp,
    FaReact,
    FaLinux,
    FaFigma,
} from "react-icons/fa";
import icon from "../assets/icon.png";
import thumbnail from "../assets/thumbnail.png";

export const publicInfo = {
    name: "名前",
    en_name: "Anonymous",
    school: "学校名",
    email: "dummy@example.com",
    github: "https://example.com",
    photoPaths: [
        icon,
        thumbnail
    ],
    timelineItems: [
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
        { year: "20**", month: "**月", label: "********************" },
    ],
};

export const skills = [
    {
        value: 70,
        icon: FaHtml5,
    },
    {
        value: 70,
        icon: FaCss3Alt,
    },
    {
        value: 60,
        icon: FaJsSquare,
    },
    {
        value: 60,
        icon: FaBootstrap,
    },
    {
        value: 50,
        icon: FaPhp,
    },
    {
        value: 55,
        icon: FaReact,
    },
    {
        value: 50,
        icon: FaLinux,
    },
    {
        value: 70,
        icon: FaFigma,
    },
];
export default publicInfo;
