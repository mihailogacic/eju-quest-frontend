export type RegisterTypes = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: 'parent';
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
  user: User;
};

export type ConfirmResetPasswordTypes = {
  new_password: string;
  confirm_new_password: string;
};

export type UserDetailsTypes = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  profile_image: string;
  created_at: string;
  reward_points: number;
};
