import {ActionIcon, Button, Group, Text, Textarea} from "@mantine/core";
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
            <div {...others}>
                <ProtectedComponent>
                    <ActionIcon onClick={beginEditing} pos="absolute">
                        <IconPencil/>
                    </ActionIcon>
                </ProtectedComponent>
                <p className={textClassName}>
                    {text}
                </p>
            </div>
        );
    }

    //If editing, the text area and the confirm/cancel buttons.
    return (
        <div {...others}>
            <textarea
                value={editText}
                onChange={(event) => setEditText(event.currentTarget.value)}
                style={{
                    resize: "none",
                    ...containerStyle
                }}
                className={textClassName}
            />
            <ProtectedComponent>
                <Group>
                    <Button onClick={save}>Salvar</Button>
                    <Button bg="red" onClick={close}>Cancelar</Button>
                </Group>
            </ProtectedComponent>
        </div>
    )
}

export default EditableText;