require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const contactRoutes = require('./backend/routes/contactRoutes');
const projectRoutes = require('./backend/routes/projectRoutes');
const qualificationRoutes = require('./backend/routes/qualificationRoutes');
const userRoutes = require('./backend/routes/userRoutes');
const authRoutes = require('./backend/routes/authRoutes');
const auth = require('./backend/middleware/authMiddleware');
const { notFound, errorHandler } = require('./backend/middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => res.json({ message: 'Welcome to My Portfolio application.' }));
app.get('/api/protected', auth, (req, res) => res.json({ message: 'Protected route accessed successfully.', user: req.user }));

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (error) {
    console.error('Unable to start server:', error.message);
    process.exit(1);
  }
}
startServer();
