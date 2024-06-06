import {ActionIcon, Button, FileButton, Group, Image} from "@mantine/core";
import {useState} from "react";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";

function EditableImage({url, onSave, ...others}){
    const [editing, setEditing] = useState(false);
    const [file, setFile] = useState(null);

    function endEditing(){
        setEditing(false);
        setFile(null);
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
            <Image crossOrigin={"anonymous"} src={(editing && file) ? URL.createObjectURL(file) : url} {...others}/>
            {editing &&
                <Group pos="absolute">
                    <Button onClick={() => {
                        onSave(file);
                        endEditing();
                    }}>Salvar</Button>
                    <Button bg="red" onClick={endEditing}>Cancelar</Button>
                </Group>
            }
        </div>
    )
}

export default EditableImage;