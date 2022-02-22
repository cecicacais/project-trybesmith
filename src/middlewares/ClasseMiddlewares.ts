import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

const classeValid = async (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  switch (true) {
    case !classe:
      return res.status(StatusCode.BAD_REQUEST).json({ error: 'Classe is required' });
    case typeof classe !== 'string':
      return res.status(StatusCode.TYPEERROR).json({ error: 'Classe must be a string' });
    case classe.length < 3:
      return res.status(StatusCode.TYPEERROR)
        .json({ error: 'Classe must be longer than 2 characters' });
    default: next();
  }
};

export default classeValid;