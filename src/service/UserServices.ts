import createUserModel from '../models/UsersModels';
import { User } from '../interfaces/user';

const createUserService = async (user: User) => {
  const newUser = await createUserModel(user);
  return newUser;
};

export default createUserService;
