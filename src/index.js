import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.status(200).json({ message: "Server on" })
})

app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})