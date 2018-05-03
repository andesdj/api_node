'use strict' //Desde node 6 se pone esto

const express= require ('express');
const bodyParser= require('body-parser'); //Middleware Capas q se emplean como tubos que conectaran
const port= process.env.PORT || 3001;

const app= express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.get('/hola/:name', (req,res) =>{
	res.send({message: `Hola ${req.params.name}!, Como estas?`})
})

app.listen(port, ()=> {
	console.log(`API REST corriendo en localhost, puerto: ${port}`)
});


