const mongoose = require('mongoose');
const { Schema } = mongoose;
const EventSchema = require('./Event');

const arcSchema = new Schema({
  title: String,
  events: [EventSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('arcs', arcSchema);
