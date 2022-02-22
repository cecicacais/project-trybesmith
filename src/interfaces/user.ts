export interface User {
  username: string;
  classe: string;
  level: 1;
  password: string;
}

export interface UserId extends User {id: number}
