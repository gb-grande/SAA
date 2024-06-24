import {ActionIcon, Button, FileButton, Group, Image} from "@mantine/core";
import {useState} from "react";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";

/**
 * An Editable Image component, used by EditableSectionImage component.
 * 
 * @param {string} url The image url.
 * @param {function} onSave The onSave function.
 * @returns The EditableImage component.
 */
function EditableImage({url, onSave, ...others}){
    const [editing, setEditing] = useState(false);
    const [file, setFile] = useState(null);

    function endEditing(){
        setEditing(false);
    }

    return (
        <div>
            <ProtectedComponent>
                <FileButton onChange={setFile}>
                    {
                        ({onClick}) => (
                            <ActionIcon onClick={() => {
                                setEditing(true);
                                onClick();
                            }} pos="absolute">
                                <IconPencil/>
                            </ActionIcon>
                        )
                    }
                </FileButton>
            </ProtectedComponent>
            <Image crossOrigin={"anonymous"} src={file ? URL.createObjectURL(file) : url} {...others}/>
            {editing &&
                <Group pos="absolute">
                    <Button onClick={() => onSave(file, endEditing)}>Salvar</Button>
                    <Button bg="red" onClick={() => {
                        setFile(null);
                        endEditing();
                    }}>Cancelar</Button>
                </Group>
            }
        </div>
    )
}

export default EditableImage;