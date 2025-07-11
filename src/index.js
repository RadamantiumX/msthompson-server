import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import informesRouter from './routes.js'
import { corsOptions } from './cors.js'

const app = express()
const PORT = 4000
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get("/", (req, res)=>{
    res.status(200).json({ message: "Server on" })
})

app.use('/api', informesRouter)

app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})