const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Authorization, x-auth-token'
  );
  next();
});
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
