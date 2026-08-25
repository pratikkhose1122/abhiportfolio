const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.DB_URI;

  if (!uri) {
    console.warn('DB_URI is not set. Skipping database connection.');
    return;
  }

  await mongoose.connect(uri);
  console.log('MongoDB connected');
}

module.exports = connectDB;
