import {Button, LoadingOverlay, PasswordInput, Stack} from "@mantine/core";
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

/**
 * ManageAdminModal component displays a modal for editing admin user details.
 * 
 * @param {object} admin The admin user object to be edited.
 * @param {function} onAdminEdited Callback function invoked when admin details are edited.
 * @returns {JSX.Element} The ManageAdminModal component.
 */
function ManageAdminModal({admin, onAdminEdited}){
    const {user} = admin;
    const [opened, {toggle}] = useDisclosure();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            oldPassword: '',
            newPassword: '',
            passwordConfirm: ''
        },

        validate: {
            oldPassword: isNotEmpty('Informe a velha senha'),
            newPassword: isNotEmpty('Informe a nova senha'),
            passwordConfirm: (value, values) => {
                if (value !== values.newPassword) {
                    return 'As senhas não coincidem!';
                }
                return isNotEmpty('Confirme a nova senha')(value);
            }
        }
    });

    function onSubmit(values){
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
    }

    return (
        <Stack component='form'  onSubmit={form.onSubmit(onSubmit)}>
            <LoadingOverlay visible={loading}/>
            <PasswordInput label="Sua antiga senha" placeholder='' visible={opened} onVisibilityChange={toggle}  {...form.getInputProps('oldPassword')} />
            <PasswordInput label="Sua nova senha" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('newPassword')}/>
            <PasswordInput label="Confirme sua nova senha" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('passwordConfirm')}/>
            <Button fullWidth type='submit' mt="md">
                Salvar
            </Button>
        </Stack>
    )
}

export default ManageAdminModal;