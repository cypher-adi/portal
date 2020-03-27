const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  college: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
