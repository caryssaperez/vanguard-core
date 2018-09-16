const mongoose = require('mongoose');
const { Schema } = mongoose;

const weaponSchema = new Schema({
  name: String,
  damage: Number
});

module.exports = mongoose.model('weapons', weaponSchema);
