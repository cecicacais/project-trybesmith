import { Request, Response } from 'express';
import createUserService from '../service/UserServices';

import StatusCode from '../enums/statusCode';

const createUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await createUserService(user);
  res.status(StatusCode.CREATED).json({ token: newUser });
};

export default createUserController;