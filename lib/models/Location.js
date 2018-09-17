const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: String
});

mongoose.model('locations', locationSchema);
