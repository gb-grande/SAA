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
        type: "cachorro",
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
        type: "cachorro",
        amount: 4,
        date: new Date('2024-06-23'),
        flow: "sent"
    },
    {
        srcDest: "Fortaleza",
        type: "gato",
        amount: 1,
        data: new Date('2024-06-24'),
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
    doc.fontSize(16);
    doc.text("RELATÓRIO DE DOAÇÕES - APRAI", {
        align: "center"
    })
    doc.moveDown(1);
    //add current date
    const today = new Date(Date.now());
    doc.fontSize(10);
    doc.text(`Gerado em: ${("0" + today.getDate()).slice(-2)}/${("0" + today.getMonth()).slice(-2) }/${1900 + today.getYear()}`);
    //add start and end date
    doc.fontSize(12);
    doc.text(`Data inicial: ${startDate}`, {
        align: "left"
    });
    doc.text(`Data final:   ${endDate}`, {
        align: "left"
    });
    return doc;
}

function insertSummary(doc, donationsInfo){
    doc.text(`Total recebido: ${donationsInfo.totalReceived}kgs`);
    doc.text(`Total enviado: ${donationsInfo.totalSent}kgs`);
}

// function insertTableHeader(doc){
//     doc.moveTo(doc.x, doc.y).lineTo(doc.x + 100, doc.y);
// }

//Inserts row of data into table
function insertRow(doc, entry){
    let {srcDest, type, amount, date, flow} = entry
    //Thy Date of different sizes. Thus, they must be formatted so that the row is correctly sized
   doc.text("textoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo\n", {
        lineGap: 5,
        width: 100,
        align: 'center'
     })
      
}

function genTable(doc, data){
    data.forEach((entry) => {
        insertRow(doc, data)
    })
}


//writes to disk and end pdf
function endDoc(doc){
    doc.pipe(createWriteStream("output.pdf"));
    doc.end();


}



let report = buildEmptyReport("01/01/2001", "05/09/2023");
insertSummary(report, donationPlaceholder);
//insertTableHeader(report)
insertRow(report, items[0])
insertRow(report, items[0])
endDoc(report)