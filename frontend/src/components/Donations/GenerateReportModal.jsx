import {useState} from "react";
import {useForm} from "@mantine/form";
import {Button, LoadingOverlay, Stack} from "@mantine/core";
import {DatePicker} from "@mantine/dates";

function GenerateReportModal() {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            startdate: '',
            enddate: ''
        },
    });

    /*function onSubmit(values){
        setLoading(true);
        axios.put(`api/admins/${user}`, {
            user: user,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        }).then(_ => {
            notifications.show({message: 'Informação atualizada com sucesso.'});
            modals.closeAll();
            if (onAdminEdited) onAdminEdited(admin);
        }).catch(err => {
            if (err.response?.data?.validationErrors){
                form.setErrors(err.response.data.validationErrors);
            } else if (err.response?.status === 401){
                form.setFieldError('oldPassword', 'Senha incorreta.')
            } else {
                console.error("Unhandled error when editing admin.", err);
                notifications.show({message: "Erro ao editar senha.", color: 'red'});
            }
        }).finally(() => setLoading(false));
    }*/

    return (
        <Stack component='form'>
            <LoadingOverlay visible={loading}/>
            <DatePicker type="range" placeholder="" {...form.getInputProps('date')} />
            <Button fullWidth type='submit' mt="md">
                Gerar
            </Button>
        </Stack>
    )
}

export default GenerateReportModal;