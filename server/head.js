const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")
//MiddleWare

app.use(cors())
app.use(express.json())


