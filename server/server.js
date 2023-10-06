const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
require('./config/connection')
const routes = require('./routes/auth')
app.use(express.json());
app.use(routes);

const middleware = (request, response,)=>{
    console.log("middleware");
   next();
}
 
app.get('/',(request, response)=>{
    response.send("hey")
});
app.get('/x', middleware, (request, response)=>{
    console.log("middleware working");
    response.send("x")
});
app.get('/y',(request, response)=>{
    response.send("y")
});
app.get('/z',(request, response)=>{
    response.send("z")
});
app.get('/signin',(request, response)=>{
    response.send("z")
});
app.get('/signup',(request, response)=>{
    response.send("z")
});


app.listen(5000, ()=>{
    console.log("server connected")
    console.log("http://localhost:5000/")
})