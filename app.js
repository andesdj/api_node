'use strict' //Desde node 6 se pone esto
const express         = require ('express');
const bodyParser      = require('body-parser'); //Middleware Capas q se emplean como tubos que conectaran
const hbs             = require('express-handlebars')
const app             = express();
const api             = require('./routes')


app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.engine('hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))

//Configuracion de las Vistas con handlebars

app.set ('view engine', '.hbs')
app.use('/api', api)


app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/', (req, res)=>{
    res.render('product')
})


// Exportar módulo para utilizar
module.exports = app
