import express from 'express';
import mongoose from 'mongoose';
import connection from './config/connection.js'; 
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Server running on http://localhost:${PORT}`);
  });
});
