const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const db = 'mongodb+srv://sufiyanshaikh11919:sE10BaAqd6Swx02u@cluster0.fanty6g.mongodb.net/ecotechDB?retryWrites=true&w=majority'

mongoose.connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
});

// middleware
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