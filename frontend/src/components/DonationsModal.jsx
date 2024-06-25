import {Button, LoadingOverlay, TextInput, Stack, Select} from "@mantine/core";
import {DateInput, DatePicker} from '@mantine/dates';
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

function RegisterDonationsModal({ onDonationCreated }) {
    const [opened, { toggle }] = useDisclosure();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            date: '',
            amount: '',
            type: '',
            srcDest: '',
            flow: ''
        },
    });

    function onSubmit(values) {
        setLoading(true);

        const mappedValues = {
            ...values,
            flow: values.flow === 'enviado' ? 'sent' : 'received'
        };

        axios.post('api/donations', mappedValues)
            .then(_ => {
                notifications.show({ message: 'Registro criado com sucesso.' });
                modals.closeAll();
                if (onDonationCreated) {
                    onDonationCreated();
                }
            }).catch(err => {
                if (err.response?.data?.validationErrors) {
                    form.setErrors(err.response.data.validationErrors);
                } else {
                    console.error("Unhandled error when creating donation registro.", err);
                    notifications.show({ message: "Erro ao criar registro de doação.", color: 'red' });
                }
            }).finally(() => setLoading(false));
    }

    return (
        <Stack component='form' onSubmit={form.onSubmit(onSubmit)}>
            <LoadingOverlay visible={loading} />
            <DateInput valueFormat="YYYY MMM DD" label="Data" placeholder="" {...form.getInputProps('date')} />
            <TextInput label="Quantidade" placeholder='' {...form.getInputProps('amount')} />
            <TextInput label="Tipo" placeholder='' {...form.getInputProps('type')} />
            <TextInput label="Origem/Destino" placeholder='' {...form.getInputProps('srcDest')} />
            <Select label="Enviado/Recebido" placeholder="" data={['enviado', 'recebido']} {...form.getInputProps('flow')} />
            <Button fullWidth type='submit' mt="md">
                Criar
            </Button>
        </Stack>
    );
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
            <DatePicker type = "range"  placeholder="" {...form.getInputProps('date')} />
            <Button fullWidth type='submit' mt="md">
                Gerar
            </Button>
        </Stack>
    )
}



export {RegisterDonationsModal, GenerateReport};