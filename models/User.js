const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },

      phoneNumber: {
        type: String,
        required: true
      },

      email: {
        type: String,
        required: true
      },

      product: {
        type: String,
        required: true
      },

      customerId: {
        type: String,
        required: true
      },

      quantity: {
        type: String,
        required: true
      },

      price: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Users', UserSchema);