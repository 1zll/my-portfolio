import { useState } from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import theme from "../theme/theme.js";
import { useNavigate } from "react-router-dom";

const mariner = theme?.colors?.mariner ?? "#4563A5";
const goldenrod = theme?.colors?.goldenrod ?? "#F6D367";

const FileIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [iconColor, setIconColor] = useState(mariner);
    const navigate = useNavigate();


    const handleClick = () => {
        setIsOpen(true);
        setIconColor(goldenrod);
        setTimeout(() => {
            setIsOpen(false);
            setIconColor(mariner);
            navigate("/home");
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