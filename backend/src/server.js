import express from 'express'
import http from 'http'
import cors from 'cors'
import helmet from "helmet";
import infoTexts from "./routes/infoTexts.js";
import './config.js'

const app = express()
app.use(helmet())
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use('/api/infoTexts', infoTexts)

const server = http.createServer(app)

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})