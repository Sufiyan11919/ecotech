const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  }
);
userSchema.pre('save', async function(next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
  }
  next();
});
userSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({ _id: this._id }, "iAmNotGoodAtCoding");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
const User = mongoose.model('USER', userSchema);
module.exports = User;