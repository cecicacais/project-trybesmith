import express from 'express';
import loginController from './controllers/LoginControllers';
import createUserController from './controllers/UserControllers';
import classeValid from './middlewares/ClasseMiddlewares';
import levelValid from './middlewares/LevelMiddlewares';
import loginValid from './middlewares/LoginMiddlewares';
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

app.route('/login').post(
  userNameValid,
  passwordValid,
  loginValid,
  loginController,
);

export default app;
