const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const RoleSchema = new Schema({
  value: {
    type: String,
    unique: true,
    default: 'USER',
  },
});

module.exports = mongoose.model('Role', RoleSchema);
