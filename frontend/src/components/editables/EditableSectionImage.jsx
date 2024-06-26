import EditableImage from "./EditableImage.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import axios from "axios";
import {notifications} from "@mantine/notifications";
import {Skeleton} from "@mantine/core";

/**
 * An Editable Section Image component, for editing images of some landing page section.
 * 
 * @param {string} section The landing page section name. 
 * @returns {JSX.Element} The EditableSectionImage component.
 */
function EditableSectionImage({section, ...others}){
    const {result: {imageUrl}, error, reFetch} = useFetch(
        `api/sectionImages/${section}`,  {
            defaultValue: {
                imageUrl: ''
            },
            dependencies: [section]
        },
    );
    if (error) {
        console.error(`Error when fetching image for '${section}'`, error.response);
    }

    function onSave(file, endEditing){
        if (!file) return;

        axios.putForm(`api/sectionImages/${section}`,{image: file})
            .then(_ => {
                notifications.show({message: 'Imagem salva.'});
                endEditing();
                reFetch();
            })
            .catch(err => {
                console.error('Error when saving image: ', err.response);
                notifications.show({message: 'Erro ao salvar imagem.', color: 'red'});
            });
    }

    if (!imageUrl){
        return (<Skeleton {...others}/>);
    }

    return (
        <EditableImage onSave={onSave} url={imageUrl} {...others}/>
    );
}

export default EditableSectionImage;