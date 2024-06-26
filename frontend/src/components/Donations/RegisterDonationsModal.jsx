import {Button, LoadingOverlay, Select, Stack, TextInput} from "@mantine/core";
import {DateInput} from '@mantine/dates';
import {useForm} from "@mantine/form";
import axios from "axios";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import {useState} from "react";

function RegisterDonationsModal({ onDonationCreated }) {
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

export default RegisterDonationsModal;