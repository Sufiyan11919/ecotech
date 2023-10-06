const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    department: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 5
    },
    image: {
      type: String,
      // required:true
      
    }
  }
);

const User = mongoose.model('USER', userSchema);
module.exports = User;