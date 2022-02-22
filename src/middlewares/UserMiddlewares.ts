import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const userNameValid = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  switch (true) {
    case !username:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Username is required' });
    case typeof username !== 'string':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Username must be a string' });
    case username.length < 3:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Username must be longer than 2 characters' });
    default: next();
  }
};

export default userNameValid;