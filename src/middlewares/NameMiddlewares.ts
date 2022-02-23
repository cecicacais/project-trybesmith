import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const nameValid = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  switch (true) {
    case !name:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Name is required' });
    case typeof name !== 'string':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Name must be a string' });
    case name.length < 3:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Name must be longer than 2 characters' });
    default: next();
  }
};

export default nameValid;