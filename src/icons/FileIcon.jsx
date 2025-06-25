import { useState } from "react";
import { Tooltip, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, Text } from "@chakra-ui/react";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import theme from "../theme/theme.js";
import { useNavigate } from "react-router-dom";
const mariner = theme?.colors?.mariner ?? "#4563A5";
const goldenrod = theme?.colors?.goldenrod ?? "#F6D367";
const JOB_PASSWORD = import.meta.env.VITE_JOB_PASSWORD || "";


const FileIcon = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [iconColor, setIconColor] = useState("mariner");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    // アイコンクリック時：モーダルを開く
    const handleClick = () => {
        setIsOpen(true);
        setIconColor(goldenrod);
        setInput("");
        setError("");
    };

    // モーダル閉じる時
    const handleClose = () => {
        setIsOpen(false);
        setIconColor(mariner);
        setInput("");
        setError("");
        navigate("/home"); // ← 追加
    };

    // パスワード送信時
    const handleSubmit = () => {
        if (input === JOB_PASSWORD) {
            setIsOpen(false);
            setIconColor(mariner);
            navigate("/job/home");
        } else {
            setError("パスワードが違います");
        }
    };

    return (
        <>
            <Tooltip
                label="Here is the file icon"
                hasArrow
                placement="top"
                bg="transparent"
                color="charcoal"
                border="1px solid"
                borderColor="goldenrod"
                borderRadius="30px"
                arrowShadowColor="transparent"
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

            <Modal isOpen={isOpen} onClose={handleClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>パスワード入力</ModalHeader>
                    <ModalBody>
                        <Input
                            type="password"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="パスワードを入力"
                        />
                        {error && <Text color="red.500" mt={2}>{error}</Text>}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSubmit} bgColor="mariner">
                            OK
                        </Button>
                        <Button variant="ghost" onClick={handleClose}>キャンセル</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FileIcon;