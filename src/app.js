const express = require('express');
const app = express();
const profileRouters = require('./routes/ProfileRouter');
const path = require('path');


app.use(express.static(path.join(__dirname, "uploads")));
// app.use(express.static(path.join(__dirname, "Public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',profileRouters);


app.use('*',(req,res,next)=>{
    res.json(404,{massage:'Oops what you are looking is may be not exist'})

})


const PORT = 3000;
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`server is listening port ${3000}`);
})