const mongoose = require('mongoose');
const { Schema } = mongoose;

const opponentSchema = new Schema({
  type: String
});

mongoose.model('opponents', opponentSchema);
