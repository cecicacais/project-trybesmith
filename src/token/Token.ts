import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtPassword = String(process.env.Jwt_SECRET);

const jwtOptions: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10h',
};

const tokenCreate = async (id: number, username: string) => {
  const payload = {
    id,
    username,
  };
  const token = jwt.sign(payload, jwtPassword, jwtOptions);
  return token;
};

export {
  tokenCreate,
  jwtOptions,
};
