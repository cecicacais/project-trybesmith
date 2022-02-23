import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import loginService from '../service/LoginServices';
import { tokenCreate } from '../token/Token';

const loginController = async (req: Request, res: Response) => {
  const user = req.body;
  const userLogin = await loginService(user.username);
  const userToken = await tokenCreate(userLogin.id, userLogin.username);
  res.status(StatusCode.OK).json({ token: userToken });
};

export default loginController;
