import EditableImage from "./EditableImage.jsx";
import useFetch from "../hooks/useFetch.jsx";
import axios from "axios";
import {notifications} from "@mantine/notifications";

function EditableSectionImage({section, ...others}){
    const {result: url, setResult: setUrl, error} = useFetch(`api/sectionImages/${section}`);
    if (error) {
        console.error(`Error when fetching image for '${section}'`, error);
    }

    function onSave(file){
        if (!file) return;

        axios.putForm(`api/sectionImages/${section}`,{image: file})
            .then(res => {
                console.log(res);
                setUrl(res.data.imageUrl);
                notifications.show({message: 'Imagem salva.'});
            })
            .catch(err => {
                console.error('Error when saving image: ', err.response.message);
                notifications.show({message: 'Erro ao salvar imagem.', color: 'red'});
            });
    }

    return (
        <EditableImage onSave={onSave} url={url} {...others}/>
    )
}

export default EditableSectionImage;