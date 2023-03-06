const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")
//MiddleWare

app.use(cors())
app.use(express.json())



//ROUTES


// Create a todo
app.post("/todos", async(req, res)=>{
    try {
        console.log(req.body);
        
    } catch (err) {
        console.log(err.message)
        
    }
})

//get all sensors

// get a sensor
app.listen(5000, () =>{
    console.log("Server has started on port 5000")
});