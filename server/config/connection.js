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

