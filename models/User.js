const passport = require('passport');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SALT_ROUNDS = 10;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  googleId: String
});

// Store a hash of the password.
userSchema.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      // store the password hash as the password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.isPasswordValid = async rawPassword =>
  await bcrypt.compare(rawPassword, this.password);

mongoose.model('users', userSchema);
