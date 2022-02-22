import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const passwordValid = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  switch (true) {
    case !password:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Password is required' });
    case typeof password !== 'string':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Password must be a string' });
    case password.length < 8:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Password must be longer than 7 characters' });
    default: next();
  }
};

export default passwordValid;