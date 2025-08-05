import express from 'express';
import cors from 'cors';
import contactRoutes from './Routes/contact.routes';
import { sequelize } from './Config/db'; // ✅ import Sequelize instance

const app = express();
const PORT = 5000;

// ✅ Enable CORS for Vite frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api/contact', contactRoutes);

// ✅ Connect to DB and start server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    await sequelize.sync(); // or sync({ alter: true }) in dev
    console.log('✅ All models synchronized.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();
