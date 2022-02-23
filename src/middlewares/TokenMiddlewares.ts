import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';
import { jwtOptions } from '../token/Token';

const jwtPassword = String(process.env.Jwt_SECRET);

const tokenValid = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(StatusCode.INVALID).json({ error: 'Token not found' }); 
  }
  try {
    jwt.verify(token, jwtPassword, jwtOptions);
    return next();
  } catch (error) {
    return res.status(StatusCode.INVALID).json({ error: 'Invalid token' });
  }
};

export default tokenValid;
