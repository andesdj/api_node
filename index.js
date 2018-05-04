'use strict' //Desde node 6 se pone esto

const express= require ('express');
const bodyParser= require('body-parser'); //Middleware Capas q se emplean como tubos que conectaran
const mongoose= require('mongoose');
const Product = require('./models/product') // No es libreria NPM, se pone ruta completa
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

	console.log ('POST/api/product')
	console.log (req.body)

	let product = new Product()
	product.name		=req.body.name
	product.picture		=req.body.picture
	product.price		=req.body.price
	product.category	=req.body.category
	product.description	=req.body.description

	product.save((err, productStored)=>{
if (err) res.status(500). send({message: `Error al guardar en la base de datos ${err}`})
		res.status(200).send({product:productStored})

	})
	//console.log(req.body);
	//res.status(200).send({message:'Producto se ha recibido V2'})
});

app.put('/api/product/:productId',(req,res)=>{

}) ;

app.delete('/api/product/:productId',(req,res) =>{

});

mongoose.connect('mongodb://localhost:27017/shop', (err, res)=> {
if(err)	{
	console.log(`Error al conectar la base de datos: ${err}`)	
	}
	console.log('Connection a la base de datos establecida...')
});


app.listen(port, ()=> {
	console.log(`API REST corriendo en localhost, puerto: ${port}`)
});


