const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/dbConnect');
const { readdirSync }= require('fs');
const router = require('./routes/video');


require('dotenv').config()

const PORT= process.env.PORT || 8000

//middLewares
app.use(cors())
app.use(express.json())

//routes
readdirSync('./routes').map((route)=> app.use('/api', require('./routes/' + route)))

const server = () =>{
    dbConnection()
    app.listen(PORT, ()=>{
        console.log(`Server is listening to ${PORT}`)
    })
}

server()