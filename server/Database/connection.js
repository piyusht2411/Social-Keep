const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    
}).then(()=>{
    console.log("DB connection successfully");
}).catch((err)=>{
    console.log(`no connection ${err}`);

});