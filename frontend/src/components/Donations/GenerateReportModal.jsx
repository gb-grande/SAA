import {useState} from "react";
import {Button, LoadingOverlay, Stack} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import axios from "axios";

function initiateDownload(blob){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio.pdf';
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function GenerateReportModal() {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState([new Date(), new Date()]);

    function onSubmit(){
        setLoading(true);
        console.log("will generate for "+value[0] + ' -> ' + value[1]);
        axios.get('api/donations/report', {
            params: {
                startDate: value[0],
                endDate: value[1] ?? value[0]
            },
            responseType: "blob"
        }).then(res => {
            initiateDownload(res.data);
            notifications.show({message: 'Relatório gerado, iniciando download.'});
            modals.closeAll();
        }).catch(err => {
            console.error('Unhandled error when generating report.', err);
            notifications.show({message: 'Erro ao gerar relatório.', color: 'red'});
        }).finally(() => setLoading(false));
    }

    return (
        <>
            <LoadingOverlay visible={loading}/>
            <Stack>
                <DatePicker type="range" allowSingleDateInRange value={value} onChange={setValue}/>
                <Button fullWidth type='submit' mt="md" onClick={onSubmit}>
                    Gerar
                </Button>
            </Stack>
        </>
    )
}

export default GenerateReportModal;