import EditableText from "./EditableText.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function EditableSectionText({section, ...others}){
    const [text, setText] = useState("");

    useEffect(() => {
        //Uses 'ignore' variable to avoid race conditions.
        let ignore = false;

        axios.get(`api/infoTexts/${section}`)
            .then(res => {if (!ignore) setText(res.data);})
            .catch(err => console.error(`Couldn't load '${section}' info.`, err));

        return () => {
            ignore = true;
        };
    }, []);

    function onSave(){
        axios.post(`api/infoTexts/${section}`, {data: text}, {params: {id: section}})
            .then(_ => console.log(`Updated ${section} text.`, text))
            .catch(err => console.error(`Failed to update ${section} text.`, err));
    }

    return (
        <EditableText text={text} setText={setText} onSave={onSave} {...others}/>
    )
}

export default EditableSectionText;