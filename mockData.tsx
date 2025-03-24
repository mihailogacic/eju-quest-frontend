import profileIcon from './src/assets/icons/profile-icon.png';
import sessionPlaceholder from './src/assets/images/session-placeholder.png';

export const recentUsersData = [
  {
    image: profileIcon,
    first_name: 'Alice',
    last_name: 'Johnson',
    role: 'Admin',
  },
  {
    image: profileIcon,
    first_name: 'Emily',
    last_name: 'Smith',
    role: 'User',
  },
  {
    image: profileIcon,
    first_name: 'Michael',
    last_name: 'Brown',
    role: 'Editor',
  },
];

export const sessionReviewsData = [
  {
    image: sessionPlaceholder,
    title: 'Great Session',
    description: 'Awesome user engagement',
    status: '5 stars',
    role: 'Admin',
  },
  {
    image: sessionPlaceholder,
    title: 'Feedback Needed',
    description: 'Interaction improvements suggested',
    status: 'Pending',
    role: 'Editor',
  },
];
