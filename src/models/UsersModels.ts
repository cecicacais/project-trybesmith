import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, UserId } from '../interfaces/user';

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

const searchUserModel = async (username: string): Promise<UserId> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username=?',
    [username],
  );

  const [userLogin] = user as UserId[];

  return userLogin;
};

export {
  createUserModel,
  searchUserModel,
};
