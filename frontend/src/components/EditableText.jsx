import {ActionIcon, Button, Group, Textarea} from "@mantine/core";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";

function EditableText({text, setText, onSave, style, ...others}){
    const [editing, {toggle}] = useDisclosure();

    //If not editing, just the text and the edit button.
    if (!editing){
        return (
            <>
                <ProtectedComponent>
                    <ActionIcon onClick={toggle}>
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
                value={text}
                onChange={(event) => setText(event.currentTarget.value)}
                style={{
                    ...style,
                    resize: "none",
                }}
                {...others}
            />
            <ProtectedComponent>
                <Group>
                    <Button onClick={() => {onSave(); toggle();}}>Salvar</Button>
                    <Button bg="red" onClick={toggle}>Cancelar</Button>
                </Group>
            </ProtectedComponent>
        </>
    )
}

export default EditableText;