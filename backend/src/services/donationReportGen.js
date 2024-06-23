import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";

//return date string to BR format
function getDateBR(date){
    const dateFormatted = ("0" + date.getDate()).slice(-2) + "/" + ("0" + String(date.getMonth() + 1)).slice(-2)  + "/" + String((1900 + date.getYear()));
    return dateFormatted;
}


//class to summarize donation info and split into two arrays 
class DonationsInfo {
    constructor(allDonations){
        this.donationIn = [];
        this.donationOut = [];
        this.totalReceived = 0;
        this.totalSent = 0;
        for (let donation of allDonations) {
                //converts to date and not timestamp
                donation.date = new Date(donation.date);
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

function buildEmptyReport(startDate, endDate){
    const doc = new PDFDocument({size: 'A4'});
    doc.font("Courier");
    //add header
    doc.fontSize(22);
    doc.text("RELATÓRIO DE DOAÇÕES - APRAI", {
        align: "center"
    })
    doc.moveDown(1);
    //add current date
    const today = new Date(Date.now());
    doc.fontSize(10);
    doc.text(`Gerado em: ${getDateBR(today)}`);
    doc.moveDown(2);
    //add start and end date
    doc.fontSize(12);
    doc.text(`Data inicial: ${getDateBR(startDate)}      Data final: ${getDateBR(endDate)}`, {
        align: "left",
    });
    doc.moveDown();
    return doc;
}

function insertSummary(doc, donationsInfo){
    doc.fontSize(12);
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
    doc.fontSize(12);
    let outputString = `Data       Quantidade Tipo                ${isReceived ? "Origem" : "Destino"}`;
    doc.font("Courier-Bold");
    doc.text(outputString, {
        width: 600,
        align: "left"
    })
    doc.font("Courier");



}

//Inserts row of data into table
function insertRow(doc, entry){
    doc.fontSize(12);
    let {srcDest, type, amount, date} = entry
    //adding space so it can be properly printed aligned
    const dateString = getDateBR(date);
    const dateWithSpace = dateString + " ";
    const amountWithSpace = (amount.toFixed(2) + " ".repeat(11)).slice(0, 11);
    const typeWithSpace = (type + " ".repeat(20)).slice(0, 20);
    const outputString = dateWithSpace + amountWithSpace + typeWithSpace  + srcDest;
    //srcDest doesn't need padding because it's the last one
    doc.text(outputString, {
        align: "left"
    })

}


//function that generates final pdf and return it
export default function generatePdf(startDate, endDate, allDonations, path){
    const donationInfo = new DonationsInfo(allDonations);
    let report = buildEmptyReport(startDate, endDate);
    insertSectionHeader(report, "Métricas Gerais")
    insertSummary(report, donationInfo);
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
    return report;

}
