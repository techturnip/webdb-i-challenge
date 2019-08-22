// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring in DB ------------------------------------|
const db = require('../data/dbConfig.js')
// import express router --------------------------|
const router = require('express').Router()
// ------------------------------------------------|
// REQ HANDLERS ===================================|
// ================================================|
// Base URL '/api/accounts/' ----------------------|
// ------------------------------------------------|
// GET Request returns an array of all accounts ---|
router.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get accounts from database' })
    })
})
// POST Request adds account to database ----------|
router.post('/', (req, res) => {
  const accountData = req.body
  console.log(accountData)

  db('accounts')
    .insert(accountData)
    .then(account => {
      console.log(account)
      res
        .status(201)
        .json({ message: `Account ${account} successfully created` })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: 'Failed to insert new account' })
    })
})
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
