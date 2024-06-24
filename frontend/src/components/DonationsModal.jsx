import {Button, LoadingOverlay, TextInput, Stack} from "@mantine/core";
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

function DonationsModal({admin, onAdminEdited}){
    const [opened, {toggle}] = useDisclosure();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            date: '',
            amount: '',
            type: '',
            srcDest: '',
            flow:''
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
        <Stack component='form'  >
            <LoadingOverlay visible={loading}/>
            <TextInput label="Data" placeholder='' visible={opened} onVisibilityChange={toggle}  {...form.getInputProps('date')} />
            <TextInput label="Quantidade" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('amount')}/>
            <TextInput label="Tipo" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('type')}/>
            <TextInput label="Origem/Destino" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('srcDest')}/>
            <TextInput label="Recebido/Enviado" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('flow')}/>
            <Button fullWidth type='submit' mt="md">
                Criar
            </Button>
        </Stack>
    )
}

function GenerateReport({admin, onAdminEdited}){
    const [opened, {toggle}] = useDisclosure();
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
        <Stack component='form'  >
            <LoadingOverlay visible={loading}/>
            <TextInput label="Data Início" placeholder='' visible={opened} onVisibilityChange={toggle}  {...form.getInputProps('startdate')} />
            <TextInput label="Data Fim" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('enddate')}/>
            <Button fullWidth type='submit' mt="md">
                Gerar
            </Button>
        </Stack>
    )
}

export {DonationsModal, GenerateReport};