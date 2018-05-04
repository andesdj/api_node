'use strict' //Desde node 6 se pone esto
const express         = require ('express');
const bodyParser      = require('body-parser'); //Middleware Capas q se emplean como tubos que conectaran
const app             = express();
const api             = require('./routes')

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use('/api', api)
// Exportar módulo para utilizar
module.exports = app
