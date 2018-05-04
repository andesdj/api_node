'use strict' //Desde node 6 se pone esto

const mongoose		= require('mongoose');
const app					= require ('./app');
const config			= require ('./config');

mongoose.connect(config.db, (err, res)=> {
if(err)	{	console.log(`Error al conectar la base de datos: ${err}`)	}
	console.log('Connection a la base de datos establecida...')
});

app.listen(config.port, ()=> {
	console.log(`API REST corriendo en localhost, puerto: ${config.port}`)
});
