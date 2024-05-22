const express = require('express')
const Router = express.Router()
const User = require('../models/user.js');
// const User = require('../models/user.js')


// INDEX
// router.get('/', async (req, res) => {
//   const foundUsers = await User.find()
//   res.render('user.json')
// })

Router.post('/', async (req, res) => {
  console.log(req.body)
  console.log('POST REQUEST MADE WITH: ', req.body)
  try {
    const slot = await User.create(req.body)
    res.redirect('/LoginPage')
  } catch (err) {
    console.log('ERROR WITH Slots POST: ', err)
    res.status(500).send(err)
  }
})

module.exports = Router