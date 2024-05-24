import express from 'express'
import http from 'http'
import cors from 'cors'
import helmet from "helmet";
import infoTexts from "./routes/infoTexts.js";
import './config.js'
import contactInfos from "./routes/contactInfos.js";

const app = express()
app.use(helmet())
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use('/api/infoTexts', infoTexts)
app.use('/api/contactInfos', contactInfos)

const server = http.createServer(app)

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})