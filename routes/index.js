'use strict'

const express       = require ('express')

const productCtrl   = require ('../controllers/product') //controlador de producto
const userCtrl      = require('../controllers/user') // Controlador de susuarios
const auth          = require  ('../middleware/auth')
const api           = express.Router()

// Con Auth se debe tener token para realizar cualqueir accion y validarla en sus metodos
api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct);
api.post('/signup', userCtrl.signUp)
api.post('/signin',userCtrl.signIn)
api.put('/product/:productId',productCtrl.saveProduct);
api.delete('/product/:productId',productCtrl.deleteProduct);

api.get('/private', auth,  (req,res)=>{
   res.status(200).send({message: 'Tienes Acceso'})
 })
module.exports= api
