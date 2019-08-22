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
// GET Request returns an individual account by id |
router.get('/:id', (req, res) => {
  const { id } = req.params

  db('accounts')
    .where({ id })
    .then(accounts => {
      const account = accounts[0]

      if (account) {
        res.json(account)
      } else {
        res.status(404).json({ message: 'Invalid account ID' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get account' })
    })
})
// PUT Request updates an existing account's info -|
router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  db('accounts')
    .where({ id })
    .update(changes)
    .then(updated => {
      if (updated) {
        res.json({ updated })
      } else {
        res.status(404).json({ message: 'Invalid account ID' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to update account' })
    })
})
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
