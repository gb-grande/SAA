import express from 'express'
import http from 'http'
import cors from 'cors'
import helmet from "helmet";
//import userRoutes from './routes/user.js'

const app = express()
app.use(helmet())
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

// app.use('/api/user', userRoutes)

const server = http.createServer(app)
//TODO proper external config (.env file?)
const port = 8080
server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})