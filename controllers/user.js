const express = require('express')
const router = express.Router()
const User = require('../models/user.js');
// const User = require('../models/user.js')


// INDEX
// router.get('/', async (req, res) => {
//   const foundUsers = await User.find()
//   res.render('user.json')
// })

module.exports = router