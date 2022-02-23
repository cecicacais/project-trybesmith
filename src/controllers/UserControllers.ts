import { Request, Response } from 'express';
import createUserService from '../service/UserServices';
import { tokenCreate } from '../token/Token';
import StatusCode from '../enums/statusCode';

const createUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await createUserService(user);
  const userToken = await tokenCreate(newUser.id, newUser.username);
  res.status(StatusCode.CREATED).json({ token: userToken });
};

export default createUserController;