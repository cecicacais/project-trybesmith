import { createUserModel } from '../models/UsersModels';
import { User } from '../interfaces/user';
import { tokenCreate } from '../token/Token';

const createUserService = async (user: User) => {
  const { username } = user; 
  const newUser = await createUserModel(user);
  const userToken = await tokenCreate(newUser, username);
  return userToken;
};

export default createUserService;
