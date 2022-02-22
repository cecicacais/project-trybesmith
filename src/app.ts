import express from 'express';
import createUserController from './controllers/UserControllers';
import classeValid from './middlewares/ClasseMiddlewares';
import levelValid from './middlewares/LevelMiddlewares';
import passwordValid from './middlewares/PasswordMiddlewares';
import userNameValid from './middlewares/UserMiddlewares';

const app = express();

app.use(express.json());

app.route('/users').post(
  userNameValid,
  classeValid,
  passwordValid,
  levelValid,
  createUserController,
);

export default app;
