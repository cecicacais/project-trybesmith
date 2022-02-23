import { searchUserModel } from '../models/UsersModels';

const loginService = async (username: string) => {
  const user = await searchUserModel(username);
  return user;
};

export default loginService;
