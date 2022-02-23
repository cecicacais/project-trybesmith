import { Products } from '../interfaces/products';
import { createProductsModel, getAllProductsModel } from '../models/ProductsModels';

const createProductsService = async (product: Products) => {
  const newProduct = await createProductsModel(product);
  return newProduct;
};

const getAllProductsService = async () => {
  const products = await getAllProductsModel();
  return products;
};

export {
  createProductsService,
  getAllProductsService,
};
