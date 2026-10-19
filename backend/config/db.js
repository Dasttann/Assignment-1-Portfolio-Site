const mongoose = require('mongoose');

async function connectDB() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is missing.');
  const connection = await mongoose.connect(process.env.MONGODB_URI, { dbName: 'Portfolio' });
  console.log(`Connected to MongoDB: ${connection.connection.name}`);
  return connection;
}
module.exports = connectDB;
