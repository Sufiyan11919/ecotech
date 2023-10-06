const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
require('./config/connection')
const routes = require('./routes/auth')

app.use(express.json());
app.use(routes);
 


app.listen(8000, ()=>{
    console.log("server connected")
    console.log("http://localhost:8000/")
})