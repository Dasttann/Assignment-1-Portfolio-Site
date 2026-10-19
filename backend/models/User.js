const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});
schema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.updated = new Date();
  next();
});
schema.methods.matchPassword = function(password) { return bcrypt.compare(password, this.password); };
schema.set('toJSON', { transform: (_doc, ret) => { delete ret.password; return ret; } });
module.exports = mongoose.model('User', schema);
