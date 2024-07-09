// index.mjs

// Import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import hrRoutes from './routes/hr.routes.js';
import financeRoutes from './routes/finance.routes.js';
import planningRoutes from './routes/planning.routes.js';
import purchasingRoutes from './routes/purchasing.routes.js';
import technologyRoutes from './routes/technology.routes.js';
import sequelize from './config/database.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/planning', planningRoutes);
app.use('/api/purchasing', purchasingRoutes);
app.use('/api/technology', technologyRoutes);

// Port configuration
const PORT = process.env.PORT || 5000;

// Sync Sequelize models with the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
