import {ActionIcon, Button, Group} from "@mantine/core";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

function EditableText({text, onSave, style, ...others}){
    const [editText, setEditText] = useState("");
    const [editing, {open, close}] = useDisclosure();

    function save(){
        onSave(editText);
        close();
    }

    //If not editing, just the text and the edit button.
    if (!editing){
        return (
            <>
                <ProtectedComponent>
                    <ActionIcon onClick={() => {setEditText(text); open();}}>
                        <IconPencil/>
                    </ActionIcon>
                </ProtectedComponent>
                {text}
            </>
        );
    }

    //If editing, the text area and the confirm/cancel buttons.
    return (
        <>
            <textarea
                value={editText}
                onChange={(event) => setEditText(event.currentTarget.value)}
                style={{
                    ...style,
                    resize: "none",
                }}
                {...others}
            />
            <ProtectedComponent>
                <Group>
                    <Button onClick={save}>Salvar</Button>
                    <Button bg="red" onClick={close}>Cancelar</Button>
                </Group>
            </ProtectedComponent>
        </>
    )
}

export default EditableText;