const express = require('express');
const app = express();

app.get('/',(request, response)=>{
    response.send("hey")
})


app.listen(5000, ()=>{
    console.log("server connected")
})