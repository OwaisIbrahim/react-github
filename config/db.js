const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    mongoose.connect(db, dbOptions);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
