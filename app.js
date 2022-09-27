const express = require('express');
const path = require('path');
const app = express();

app.get("",(req,res)=>{

    res.sendFile('intro.html', {root: path.join(__dirname, '')});
})

app.get("/info",(req,res)=>{

    res.sendFile('info.html', {root: path.join(__dirname, '')});
})

app.get("/hobby",(req,res)=>{

    res.sendFile('hobby.html', {root: path.join(__dirname, '')});
})

app.get("/outro",(req,res)=>{

    res.sendFile('outro.html', {root: path.join(__dirname, '')});
})

app.listen(3000,()=>{
    
    console.log('Server starting up at: port:3000:');
})