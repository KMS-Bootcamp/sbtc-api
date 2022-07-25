const mongoose = require('mongoose');

const SyncSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },

  isSync: {
    type: Boolean,
    require: true,
  }
});

module.exports = mongoose.model('Syncs', SyncSchema);