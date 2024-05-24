import EditableText from "./EditableText.jsx";
import axios from "axios";
import useFetch from "../hooks/useFetch.jsx";

function EditableSectionText({section, containerStyle, inputStyle, textClassName, maxLen}){
    const {result: text, setResult: setText, error} = useFetch(`api/infoTexts/${section}`, null, '');
    if (error){
        console.error(`Couldn't load '${section}' info.`, error);
    }

    function onSave(value){
        axios.post(`api/infoTexts/${section}`, {data: value})
            .then(_ => {
                console.log(`Updated ${section} text.`);
                setText(value);
            })
            .catch(err => console.error(`Failed to update ${section} text.`, err));
    }

    return (
        <EditableText inputStyle={inputStyle} containerStyle={containerStyle} textClassName={textClassName}
                      text={text} onSave={onSave} maxLen={maxLen}
        />
    )
}

export default EditableSectionText;