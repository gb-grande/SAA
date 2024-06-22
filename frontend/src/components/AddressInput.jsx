import ContactInput from "./ContactInput.jsx";
import {modals} from "@mantine/modals";
import SelectionMap from "./SelectionMap.jsx";

function AddressInput({value, setValue, ...others}){
    function openMapModal(){
        modals.open({
            title: 'Selecionar Endereço',
            centered: true,
            children: <SelectionMap value={value} setValue={setValue} />
        })
    }

    return (
        <ContactInput type='text' readOnly {...others} onClick={openMapModal} value={value.label}/>
    )
}
export default AddressInput;