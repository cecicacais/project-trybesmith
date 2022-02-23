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

export default createProductsModel;
