import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";


const items = [
    {
        srcDest: "São Paulo",
        type: "gato",
        amount: 5.2,
        date: new Date('2024-06-20'),
        flow: "received"
    },
    {
        srcDest: "Porto Alegre",
        type: "gatoaff",
        amount: 3,
        date: new Date('2024-06-21'),
        flow: "sent"
    },
    {
        srcDest: "Salvador",
        type: "gato",
        amount: 2,
        date: new Date('2024-06-22'),
        flow: "received"
    },
    {
        srcDest: "Brasília",
        type: "cacho",
        amount: 4,
        date: new Date('2024-06-23'),
        flow: "sent"
    },
    {
        srcDest: "Fortaleza",
        type: "gato",
        amount: 1,
        date: new Date('2024-06-24'),
        flow: "received"
    }
];


//class to summarize donation info and split into two arrays 
class DonationsInfo {
    constructor(allDonations){
        this.donationIn = [];
        this.donationOut = [];
        this.totalReceived = 0;
        this.totalSent = 0;
        for (let donation of allDonations) {
            if (donation.flow == 'received') {
                this.donationIn.push(donation);
                this.totalReceived += donation.amount
            }
            else {
                this.donationOut.push(donation);
                this.totalSent += donation.amount
            }
        }
    }
}
const donationPlaceholder = new DonationsInfo(items);

function buildEmptyReport(startDate, endDate){
    const doc = new PDFDocument({size: 'A4'});
    //add header
    doc.fontSize(22);
    doc.text("RELATÓRIO DE DOAÇÕES - APRAI", {
        align: "center"
    })
    doc.moveDown(1);
    //add current date
    const today = new Date(Date.now());
    doc.fontSize(10);
    doc.text(`Gerado em: ${("0" + today.getDate()).slice(-2)}/${("0" + today.getMonth()).slice(-2) }/${1900 + today.getYear()}`);
    doc.moveDown(2);
    //add start and end date
    doc.fontSize(14);
    doc.text(`Data inicial: ${startDate}      Data final: ${endDate}`, {
        align: "left",
    });
    doc.moveDown();
    return doc;
}

function insertSummary(doc, donationsInfo){
    doc.fontSize(14);
    doc.text(`Total recebido: ${donationsInfo.totalReceived.toFixed(1)}kgs`);
    doc.text(`Total enviado: ${donationsInfo.totalSent.toFixed(1)}kgs`);
    doc.text(`Variação do estoque: ${(donationsInfo.totalReceived - donationsInfo.totalSent).toFixed(1)}kgs`)
}

 function insertSectionHeader(doc, header){
    doc.moveTo(0, doc.y).lineTo(595.28, doc.y).stroke();
    doc.moveDown(2);
    doc.fontSize(18)
    doc.text(`${header}`, {
        align: "center"
    });
    doc.moveDown();
 }

function insertTableHeaders(doc, isReceived){
    doc.fontSize(14);
    let outputString = `Data                 Tipo                            Quantidade  ${isReceived ? "Origem" : "Destino"}`;
    doc.font("Helvetica-Bold");
    doc.text(outputString, {
        width: 600,
        align: "left"
    })
    doc.font("Helvetica");



}

//Inserts row of data into table
function insertRow(doc, entry){
    doc.fontSize(14);
    let {srcDest, type, amount, date} = entry
    //adding space so it can be properly printed aligned
    const dateString = ( "0" + date.getDate()).slice(-2) + "/" + ( "0" + date.getMonth()).slice(-2) + "/" + String((1900 + date.getYear()));
    const dateWithSpace = dateString + " ".repeat(7);
    const typeWithSpace = (type + " ".repeat(40)).slice(0, 32);
    const amountWithSpace = (amount.toFixed(2) + " ".repeat(16)).slice(0, 18);
    const outputString = dateWithSpace + typeWithSpace + amountWithSpace + srcDest;
    //srcDest doesn't need padding because it's the last one
    console.log(outputString);
    doc.text(outputString, {
        align: "left"
    })

}


//writes to disk and end pdf
function endDoc(doc){
    doc.pipe(createWriteStream("output.pdf"));
    doc.end();


}


//function that generates final pdf
function generatePdf(startDateString, endDateString, allDonations){
    const donationInfo = new DonationsInfo(allDonations);
    let report = buildEmptyReport(startDateString, endDateString);
    insertSectionHeader(report, "Métricas Gerais")
    insertSummary(report, donationPlaceholder);
    report.moveDown(1);
    //received section
    insertSectionHeader(report, "Recebidos")
    insertTableHeaders(report, true);
    report.moveDown();
    //insert all received
    for (let r of donationInfo.donationIn) {
        insertRow(report, r);
    }
    report.moveDown();
    //sent section
    insertSectionHeader(report, "Enviados")
    insertTableHeaders(report, false);
    report.moveDown();
    //insert all received
    for (let s of donationInfo.donationOut) {
        insertRow(report, s);
    }
    endDoc(report)



}

generatePdf("01/01/2001", "05/09/2023", items);