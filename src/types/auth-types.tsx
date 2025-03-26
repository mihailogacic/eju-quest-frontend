export type RegisterTypes = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type LoginResponseTypes = {
  access_token: string;
  refresh_token: string;
  user: User;
};
