import { Products } from '../interfaces/products';
import createProductsModel from '../models/ProductsModels';

const createProductsService = async (product: Products) => {
  const newProduct = await createProductsModel(product);
  return newProduct;
};

export default createProductsService;
