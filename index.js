'use strict' //Desde node 6 se pone esto

const express= require ('express');
const bodyParser= require('body-parser'); //Middleware Capas q se emplean como tubos que conectaran
const port= process.env.PORT || 3001;

const app= express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.get('/api/product', (req,res) =>{
res.send(200, {products:[]}) //array JSON con productos
});

app.get('/api/product/:productId', (req,res)=> {

});

app.post('/api/product', (req, res)=>{
	console.log(req.body);
	res.send(200,{message:'Producto se ha recibido'})
});

app.put('/api/product/:productId',(req,res)=>{

}) ;

app.delete('/api/product/:productId',(req,res) =>{

});

app.listen(port, ()=> {
	console.log(`API REST corriendo en localhost, puerto: ${port}`)
});


