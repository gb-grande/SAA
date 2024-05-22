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

    function onSave(value){
        axios.post(`api/infoTexts/${section}`, {data: value}, {params: {id: section}})
            .then(_ => console.log(`Updated ${section} text.`, value))
            .catch(err => console.error(`Failed to update ${section} text.`, err));
        setText(value);
    }

    return (
        <EditableText text={text} onSave={onSave} {...others}/>
    )
}

export default EditableSectionText;