import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const amountValid = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  switch (true) {
    case !amount:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Amount is required' });
    case typeof amount !== 'string':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Amount must be a string' });
    case amount.length < 3:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Amount must be longer than 2 characters' });
    default: next();
  }
};

export default amountValid;