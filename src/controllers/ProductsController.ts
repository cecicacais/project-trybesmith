import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import { createProductsService, getAllProductsService } from '../service/ProductsServices';

const createProductController = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await createProductsService(product);
  res.status(StatusCode.CREATED).json({ item: newProduct });
};

const getAllProductController = async (_req: Request, res: Response) => {
  const products = await getAllProductsService();
  res.status(StatusCode.OK).json(products);
};

export {
  createProductController,
  getAllProductController,
};