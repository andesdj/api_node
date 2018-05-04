'use strict' //Desde node 6 se pone esto

module.exports = {
  port : process.env.PORT || 3001,
  db :   'mongodb://localhost:27017/shop'
}

//Production cambiar:
// db: process.env.MONGODB ||  'mongodb://localhost:27017/shop'
