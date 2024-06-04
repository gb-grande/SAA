import EditableText from "./EditableText.jsx";
import axios from "axios";
import useFetch from "../hooks/useFetch.jsx";
import {notifications} from "@mantine/notifications";

function EditableSectionText({section, containerStyle, textContainerStyle, inputContainerStyle, inputStyle, textClassName, maxLen}){
    const {result: text, setResult: setText, error} = useFetch(`api/infoTexts/${section}`, null, '');
    if (error){
        console.error(`Couldn't load '${section}' info.`, error);
    }

    function onSave(value){
        if (String(value) === String(text)) return;

        axios.post(`api/infoTexts/${section}`, {data: value})
            .then(_ => {
                setText(value);
                notifications.show({message: 'Seção de texto salva.'});
            })
            .catch(err => {
                console.error(`Unhandled error when registering ${section} text.`, err);
                notifications.show({message: 'Erro ao editar seção de texto.', color: 'red'});
            });
    }

    return (
        <EditableText inputStyle={inputStyle} containerStyle={containerStyle}
                      textContainerStyle={textContainerStyle} inputContainerStyle={inputContainerStyle}
                      textClassName={textClassName} text={text} onSave={onSave} maxLen={maxLen}
        />
    )
}

export default EditableSectionText;