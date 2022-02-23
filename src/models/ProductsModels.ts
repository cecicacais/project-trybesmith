import { ResultSetHeader } from 'mysql2';
import { Products } from '../interfaces/products';
import connection from './connection';

const createProductsModel = async (product: Products) => {
  const { name, amount } = product;

  const [newProduct] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount)
    VALUE
    (?, ?)
    `, [name, amount]);

  const { insertId } = newProduct;

  const newProductId = { id: insertId, name, amount };

  return newProductId;
};

const getAllProductsModel = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products;
};

export {
  createProductsModel,
  getAllProductsModel,
};
