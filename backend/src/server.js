import express from 'express'
import http from 'http'
import cors from 'cors'
import helmet from "helmet";
import contactInfo from "./routes/contactInfo.js";
import './config.js'

const app = express()
app.use(helmet())
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use('/api/contactInfo', contactInfo)

const server = http.createServer(app)

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})