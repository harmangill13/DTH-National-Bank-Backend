const mongoose = require('mongoose')
const Schema = mongoose.Schema

// MODELS
const userSchema = new Schema({
  username: String, 
  password: String,
  name: String,
  email: String,
  phoneNumber: Number,
  loanOfficer: Boolean,
  hasLoanApplicationPending: Boolean,
  creditScore: Number,
  checkingAccount: Number,
})

const User = mongoose.model('User', userSchema)
module.exports = User