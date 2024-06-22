import EditableText from "./EditableText.jsx";
import axios from "axios";
import useFetch from "../hooks/useFetch.jsx";
import {notifications} from "@mantine/notifications";

/**
 * An Editable Section Text component, for editing text of some landing page section
 * 
 * @param {string} section The landing page section name.
 * @param {object} containerStyle - Custom styles to apply to the outer container.
 * @param {object} textContainerStyle - Custom styles to apply to the text container.
 * @param {object} inputContainerStyle - Custom styles to apply to the input container.
 * @param {object} inputStyle - Custom styles to apply to the input element.
 * @param {string} textClassName - Custom class name to apply to the text element.
 * @param {number} maxLen - The maximum length of the text.
 * @returns The EditableSectionText component.
 */
function EditableSectionText({section, containerStyle, textContainerStyle, inputContainerStyle, inputStyle, textClassName, maxLen}){
    const {result: text, setResult: setText, error} = useFetch(`api/infoTexts/${section}`, {
        defaultValue: ''
    });
    if (error){
        console.error(`Couldn't load '${section}' info.`, error);
    }

    function onSave(value){
        if (String(value) === String(text)) return;

        axios.put(`api/infoTexts/${section}`, {data: value})
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