import EditableText from "./EditableText.jsx";
import axios from "axios";
import useFetch from "../../hooks/useFetch.jsx";
import {notifications} from "@mantine/notifications";
import {Skeleton} from "@mantine/core";

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
 * @returns {JSX.Element} The EditableSectionText component.
 */
function EditableSectionText({section, containerStyle, textContainerStyle, inputContainerStyle, inputStyle, textClassName, maxLen}){
    const {result: {text}, error, loading, reFetch} = useFetch(`api/infoTexts/${section}`, {
        defaultValue: {text: ''}
    });
    if (error){
        console.error(`Couldn't load '${section}' info.`, error);
    }

    function onSave(value){
        if (String(value) === String(text)) return;

        axios.put(`api/infoTexts/${section}`, {data: value})
            .then(_ => {
                notifications.show({message: 'Seção de texto salva.'});
                reFetch();
            })
            .catch(err => {
                console.error(`Unhandled error when registering ${section} text.`, err);
                notifications.show({message: 'Erro ao editar seção de texto.', color: 'red'});
            });
    }

    if (loading) return (<Skeleton style={inputContainerStyle}/>);

    return (
        <EditableText inputStyle={inputStyle} containerStyle={containerStyle}
                      textContainerStyle={textContainerStyle} inputContainerStyle={inputContainerStyle}
                      textClassName={textClassName} text={text} onSave={onSave} maxLen={maxLen}
        />
    );
}

export default EditableSectionText;