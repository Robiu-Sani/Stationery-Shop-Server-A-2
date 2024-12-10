import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './Products/Products.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation routes
app.use('/api', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Steshonary shop server is running!');
});

export default app;
