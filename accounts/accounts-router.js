// IMPORTS/INITIALIZATION =========================|
// ================================================|
// import express router --------------------------|
const router = require('express').Router()
// bring in DB ------------------------------------|
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// REQ HANDLERS ===================================|
// ================================================|
// Base URL '/api/accounts/' ----------------------|
// ------------------------------------------------|
// GET Request returns an array of all actions ----|
router.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      console.log(accounts)
    })
    .catch(err => {
      console.log(err)
    })
})
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
