const { strict } = require('assert');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
   email: {
      type: String,
      reqired: true,
   },
   name: {
      type: String,
   },
})

module.exports = mongoose.model('Users', userSchema);