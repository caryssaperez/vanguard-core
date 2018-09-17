const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  arcId: Number
});

mongoose.model('events', eventSchema);
