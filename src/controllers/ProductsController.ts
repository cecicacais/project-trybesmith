import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import createProductsService from '../service/ProductsServices';

const createProductController = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await createProductsService(product);
  res.status(StatusCode.CREATED).json({ item: newProduct });
};

export default createProductController;