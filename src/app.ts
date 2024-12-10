import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './Products/Products.route';
import { OrderRoute } from './Order/Order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation routes
app.use('/api', ProductRoute);
app.use('/api', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Steshonary shop server is running!');
});

export default app;
