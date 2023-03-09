import express from 'express';
import { cors } from '../middlewares/cors';

const app = express();
app.use(express.json());
app.use(cors);


export { app };
