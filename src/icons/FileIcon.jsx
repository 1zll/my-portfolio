import { useState } from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import theme from "../theme/theme.js";
import { useLocation,useNavigate } from "react-router-dom";
const mariner = theme?.colors?.mariner ?? "#4563A5";
const goldenrod = theme?.colors?.goldenrod ?? "#F6D367";

const FileIcon = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const jobInfo = "/job/home"; // パス文字列を明示的に用意
    const publicInfo = "/public/home";

    const [isOpen, setIsOpen] = useState(false);
    const [iconColor, setIconColor] = useState("mariner");

    const handleClick = () => {
        setIsOpen(true);
        setIconColor(goldenrod);

        const isJobRoute = location.pathname.startsWith("/job");
        const homePath = isJobRoute ? jobInfo : publicInfo;

        setTimeout(() => {
            setIsOpen(false);
            setIconColor(mariner);
            navigate(homePath);
        }, 1000);
    };

    return (
        <Tooltip
            label="Here is the file icon"
            hasArrow
            placement="top"
            bg="transparent"           // 背景を透明に
            color="charcoal"          // 文字の色
            border="1px solid"         // 枠線つける
            borderColor="goldenrod"    // 枠線の色
            borderRadius="30px"
            arrowShadowColor="transparent" // 矢印の影も透明に
        >
            <IconButton
                icon={isOpen ? <FaRegFolderOpen /> : <FaRegFolder />}
                aria-label="Folder icon"
                onClick={handleClick}
                variant="ghost"
                color={iconColor}
                fontSize="48px"
                _hover={{ color: goldenrod }}
            />
        </Tooltip>
    );
};

export default FileIcon;