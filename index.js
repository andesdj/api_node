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

	Product.find({}, (err, products)=>{
		if(err) return res.status.send({message:`Error al realizar la petición ${err}`})
		if(!products)	 return res.status(404).send({message: `No existen productos`})
		res.send(200, 	{products}	) //array JSON con productos	
	})

});

app.get('/api/product/:productId', (req,res)=> {
	let productId= req.params.productId	
	Product.findById(productId, (err, product)=>{
			if(err) return res.status.send({message:`Error al realizar la petición ${err}`})
			if(!product)	 return res.status(404).send({message: `El producto no existe`})
		res.status(200).send({product})
		console.log(product)

	})

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

});

app.put('/api/product/:productId',(req,res)=>{
let productId= req.params.productId
let update = req.body
Product.findByIdAndUpdate(productId, update, (err, productUpdated)=>{
	if(err) res.status(500).send({message: `Error al actualizar el producto ${productId}`})
	res.status(200).send({product: productUpdated})	

})


}) ;

app.delete('/api/product/:productId',(req,res) =>{
	let productId= req.params.productId	
	Product.findById(productId, (err, product)=>{

		if(err) res.status(500).send({message: `Error al Borrar el producto ${productId}`})
		product.remove(err=>{
			if(err) res.status(500).send({message: `Error al Borrar el producto ${productId}`})
				res.status(200).send({message: `El producto ha sido eliminado, id: ${productId}` })
		})
	})

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


