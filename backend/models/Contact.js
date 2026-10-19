const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true }
}, { timestamps: true });
module.exports = mongoose.model('Contact', schema);
