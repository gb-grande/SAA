import EditableText from "./EditableText.jsx";
import axios from "axios";
import useFetch from "../hooks/useFetch.jsx";

function EditableSectionText({section, containerStyle, inputStyle, textClassName, maxLen}){
    const {result, setResult, error} = useFetch(`api/infoTexts/${section}`);
    if (error){
        console.error(`Couldn't load '${section}' info.`, textError);
    }

    function onSave(value){
        axios.post(`api/infoTexts/${section}`, {data: value})
            .then(_ => console.log(`Updated ${section} text.`))
            .catch(err => console.error(`Failed to update ${section} text.`, err));
        setResult(value);
    }

    return (
        <EditableText inputStyle={inputStyle} containerStyle={containerStyle} textClassName={textClassName} text={result} onSave={onSave} maxLen={maxLen}/>
    )
}

export default EditableSectionText;