import { SingleUser } from '../types/users-types';

export const filterUsersBySearch = (
  users: SingleUser[],
  search: string,
  role: string = 'child'
) => {
  return users
    .filter((user) => user.role === role)
    .filter((user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
};

export const capitalize = (text: string) => {
  if (!text) return '';
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
