const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

connectDB().catch((err) => {
  console.error('Database connection failed:', err.message);
});

app.get('/', (req, res) => {
  res.json({ message: 'Abhi Portfolio API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
