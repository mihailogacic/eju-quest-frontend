export type AddChildTypes = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: 'child';
};

export type SingleUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type ChildTypes = {
  users: SingleUser[];
  summaries: {
    id: number;
    description: string;
    creator: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      role: string;
    };
  }[];
};
