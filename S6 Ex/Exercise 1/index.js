const express = require('express');
const server = express();
const port = 3000;
const fs = require('fs');

const data = fs.readFileSync('planets.json'); 




server.use(express.static('public'))

server.get('/',  (req, res)=> {

    res.redirect(`/info.html`)

})

server.get('/getdata', (req, res)=> {

    res.json(JSON.parse(data))

})

server.get('/randomtext', (req, res)=> {

    let planets = JSON.parse(data)

    res.json(planets.planets[Math.floor(Math.random() * 7)])

})

server.listen(port,  () =>{

    console.log(`server listening at port http://localhost:${port}`);
})