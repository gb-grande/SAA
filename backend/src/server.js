import express from 'express'
import http from 'http'
import cors from 'cors'
import helmet from "helmet";
import contactInfo from "./routes/contactInfo.js";

const app = express()
app.use(helmet())
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use('/api/contactInfo', contactInfo)

const server = http.createServer(app)
//TODO proper external config (.env file?)
const port = 8080
server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})