const Schema = require('mongoose');
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      unique: false
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
    description: {
      type: String,
      required: true,
      // minLength: 1,
      // maxLength: 280
    },
    image: {
      type: String,
      // required:true
      
    },
    toJSON: {
      virtuals: true
    }
  }
);

const User = mongoose.model('USER', userSchema);
module.exports = User;