// SERVER SETUP ===================================|
// ================================================|

// IMPORTS/INITIALIZATION =========================|
// ================================================|
// import express ---------------------------------|
const express = require('express')
// import router ----------------------------------|
const AccountsRouter = require('./accounts/accounts-router.js')
// intialize express server -----------------------|
const server = express()
// ------------------------------------------------|
// GLOBAL MIDDLEWARE ==============================|
// ================================================|
// bring in body parser module as middleware ------|
server.use(express.json())
// setup router endpoints -------------------------|
server.use('/api/accounts', AccountsRouter)
// ------------------------------------------------|
// DEFINE ROOT ROUTE ==============================|
// ================================================|
server.get('/', (req, res) => {
  res.send('<h3>WEB DB I - Challenge</h3>')
})
// ------------------------------------------------|
// EXPORT SERVER ==================================|
// ================================================|
module.exports = server
