import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/user';

const createUserModel = async (user: User) => {
  const { username, classe, level, password } = user;
  const [newUser] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUE
    (?, ?, ?, ?)
    `, [username, classe, level, password]);

  const { insertId } = newUser;

  const newUserId = { username, id: insertId };

  return newUserId;
};

export default createUserModel;
