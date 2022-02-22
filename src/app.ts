import express from 'express';
import createUserController from './controllers/UserControllers';

const app = express();

app.use(express.json());

app.route('/users').post(createUserController);

export default app;
