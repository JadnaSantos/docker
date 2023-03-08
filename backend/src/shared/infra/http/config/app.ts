import express from 'express';
import { cors } from '../middlewares/cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors);


export { app };
