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

const timelineItems = import.meta.env.VITE_TIMELINEITEMS;

const jobInfo = {
    name: import.meta.env.VITE_NAME,
    enName: import.meta.env.VITE_EN_NAME,
    school: import.meta.env.VITE_SCHOOL,
    email: import.meta.env.VITE_EMAIL,
    github: import.meta.env.VITE_GITHUB,
    photoPaths: [
        import.meta.env.VITE_MY_FACE,
        import.meta.env.VITE_MY_THUMBNAIL,
    ],
    timelineItems: timelineItems,
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
export default jobInfo;