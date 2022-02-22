import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const levelValid = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  switch (true) {
    case typeof level !== 'number' && !level:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Level is required' });
    case typeof level !== 'number':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Level must be a number' });
    case level < 1:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Level must be greater than 0' });
    default: next();
  }
};

export default levelValid;