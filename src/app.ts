import express from 'express';
import loginController from './controllers/LoginControllers';
import createProductController from './controllers/ProductsController';
import createUserController from './controllers/UserControllers';
import amountValid from './middlewares/AmountMiddlewares';
import classeValid from './middlewares/ClasseMiddlewares';
import levelValid from './middlewares/LevelMiddlewares';
import loginValid from './middlewares/LoginMiddlewares';
import nameValid from './middlewares/NameMiddlewares';
import passwordValid from './middlewares/PasswordMiddlewares';
import tokenValid from './middlewares/TokenMiddlewares';
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

app.route('/products').post(
  tokenValid,
  amountValid,
  nameValid,
  createProductController,
);

export default app;
