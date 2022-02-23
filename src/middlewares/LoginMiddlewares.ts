import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';
import { searchUserModel } from '../models/UsersModels';
import { UserId } from '../interfaces/user';

const loginValid = async (req: Request, res: Response, next: NextFunction) => {
  const userLogin = req.body;

  const user: UserId = await searchUserModel(userLogin.username);

  switch (true) {
    case user === undefined || user.password !== userLogin.password:
      return res.status(StatusCode.INVALID)
        .json({ error: 'Username or password invalid' });
    default: next();
  }
};

export default loginValid;