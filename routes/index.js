'use strict'

const express       = require ('express')
const productCtrl   = require ('../controllers/product')
const auth          = require  ('../middleware/auth')
const api           = express.Router()


api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct);
api.put('/product/:productId',productCtrl.saveProduct);
api.delete('/product/:productId',productCtrl.deleteProduct);
api.get('/private', auth,  (req,res)=>{   res.status(200).send({message: 'Tienes Acceso'})})
module.exports= api
