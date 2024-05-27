import {ActionIcon, Button, Center, FocusTrap, Group} from "@mantine/core";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";



const urlRegex = /((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9@:%._+~#=]{2,256}(?:\.[a-z]{2,6})+\b(?:\.?[-a-zA-Z0-9@:%_+~#?&/=])*)/g

function splitText(text){
    if (text === undefined || text === null) return;
    if (typeof(text) != "string") text = String(text);
    const parts = text.split(urlRegex);
    for (let i = 0; i < parts.length; i++){
        if (parts[i].match(urlRegex)) {
            const url = parts[i];
            const href = url.startsWith('http') ? url : ('http://' + url);
            parts[i] = (<a key={i} href={href}>{url}</a>);
        }
        else
            parts[i] = (<span key={i}>{parts[i]}</span>);
    }
    return parts;
}

function EditableText({text, onSave, containerStyle, textContainerStyle, inputContainerStyle, inputStyle, textClassName, maxLen}){
    const [editText, setEditText] = useState("");
    const [editing, {open, close}] = useDisclosure();

    function beginEditing(){
        setEditText(text);
        open();
    }

    function save(){
        onSave(String(editText));
        close();
    }

    //If not editing, just the text and the edit button.
    if (!editing){
        return (
            <div style={textContainerStyle ?? containerStyle}>
                <ProtectedComponent>
                    <ActionIcon onClick={beginEditing} pos="absolute">
                        <IconPencil/>
                    </ActionIcon>
                </ProtectedComponent>
                <Center>
                    <p className={textClassName}>
                        {splitText(text)}
                    </p>
                </Center>
            </div>
        );
    }

    const maxLenProp = maxLen ? {maxLength: maxLen} : {};
    //If editing, the text area and the confirm/cancel buttons.
    return (
        <div style={inputContainerStyle ?? containerStyle}>
            <FocusTrap active={true}>
                <textarea
                    value={editText}
                    onChange={(event) => setEditText(event.currentTarget.value)}
                    style={{
                        resize: "none",
                        background: "none",
                        width: "100%",
                        height: "100%",
                        ...inputStyle
                    }}
                    {...maxLenProp}
                    className={textClassName}
                />
                {/*<Textarea*/}
                {/*    value={editText}*/}
                {/*    onChange={(event) => setEditText(event.currentTarget.value)}*/}
                {/*    classNames={{root: textClassName}}*/}
                {/*    variant="unstyled"*/}
                {/*/>*/}
            </FocusTrap>

            <ProtectedComponent>
                <Group pos={"absolute"}>
                    <Button onClick={save}>Salvar</Button>
                    <Button bg="red" onClick={close}>Cancelar</Button>
                </Group>
            </ProtectedComponent>
        </div>
    )
}

export default EditableText;