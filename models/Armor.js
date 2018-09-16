const mongoose = require('mongoose');
const { Schema } = mongoose;

const armorSchema = new Schema({
  name: String,
  type: String,
  rating: Number
});

mongoose.model('armor', armorSchema);
