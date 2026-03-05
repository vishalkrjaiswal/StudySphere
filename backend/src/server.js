import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import { connectDB } from "./utils/db.js";

dotenv.config();

import authRoutes from './routes/authRoutes.js'
import taskRoutes from "./routes/taskRoutes.js"

const app = express();

const PORT = process.env.PORT || 8001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
// Global error handler
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});


