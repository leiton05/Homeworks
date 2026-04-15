export type User = {
  email: string;
  username: string;
  password: string;
};

export type UserNotPass = Omit<User, "password">;
export type UserLogin = Omit<User, "username">;
