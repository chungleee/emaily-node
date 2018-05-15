const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  }
});

mongoose.model('User', UserSchema);