import cors from 'cors';
import express from 'express';
import orderRoutes from './routes/order.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/orders', orderRoutes);

app.listen(8000, () => {
  console.log('connected');
});
