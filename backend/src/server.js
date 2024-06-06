import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';
import helmet from "helmet";
import infoTexts from "./routes/infoTexts.js";
import contactInfos from "./routes/contactInfos.js";
import adminLogin from "./routes/adminLogin.js";
import cookieParser from 'cookie-parser';
import admins from "./routes/admins.js";
import sectionImages from "./routes/sectionImages.js";
import './config.js';

const app = express();
app.use(helmet());
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/infoTexts', infoTexts);
app.use('/api/contactInfos', contactInfos);
app.use('/admins/login', adminLogin);
app.use('/api/admins', admins);
app.use('/api/sectionImages', sectionImages);

//Serve static files
app.use('/images', express.static('images'), );

const server = http.createServer(app);

const uri = process.env.DB_URI;
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(error){
        console.error(error);
    }
}
connect();

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})