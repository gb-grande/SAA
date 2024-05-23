import {ActionIcon, Box, Button, FocusTrap, Group} from "@mantine/core";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

function EditableText({text, onSave, containerStyle, textClassName, ...others}){
    const [editText, setEditText] = useState("");
    const [editing, {open, close}] = useDisclosure();

    function beginEditing(){
        setEditText(text);
        open();
    }

    function save(){
        onSave(editText);
        close();
    }

    //If not editing, just the text and the edit button.
    if (!editing){
        return (
            <Box>
                <ProtectedComponent>
                    <ActionIcon onClick={beginEditing} pos="absolute">
                        <IconPencil/>
                    </ActionIcon>
                </ProtectedComponent>
                <p className={textClassName}>
                    {text}
                </p>
            </Box>
        );
    }

    //If editing, the text area and the confirm/cancel buttons.
    return (
        <Box {...others}>
            <FocusTrap active={true}>
                <textarea
                    value={editText}
                    onChange={(event) => setEditText(event.currentTarget.value)}
                    style={{
                        resize: "none",
                        ...containerStyle
                    }}
                    className={textClassName}
                />
            </FocusTrap>
            <ProtectedComponent>
                <Group pos={"absolute"}>
                    <Button onClick={save}>Salvar</Button>
                    <Button bg="red" onClick={close}>Cancelar</Button>
                </Group>
            </ProtectedComponent>
        </Box>
    )
}

export default EditableText;