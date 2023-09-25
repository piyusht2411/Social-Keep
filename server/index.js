const dotenv = require('dotenv');
const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
const mongoose = require('mongoose');
dotenv.config({ path: './.env'});
require('./Database/connection');
const PORT = process.env.PORT;
app.use(express.json());
app.use(require('./router/auth'));




const middleware = (req, resp, next) =>{
    console.log("middleware");
    next();
} 

app.listen(PORT, ()=>{
    console.log(`Server Conneted at ${PORT}`);
})