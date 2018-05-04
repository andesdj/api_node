'use strict'
const mongoose= require('mongoose');
const Schema= mongoose.Schema;


//Creacion del Schema del producto
const ProductSchema= Schema ({

name: 			String,
picture: 		String,
price: 			{type: Number, default: 0},
category: 		{type: String, enum:  ['computers', 'phones', 'accesories','laptop']},
description: 	String

});
//Acceder al modelo
module.exports = mongoose.model('Product', ProductSchema)