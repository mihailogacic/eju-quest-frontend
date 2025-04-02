import profileIcon from './src/assets/icons/profile-icon.png';
import sessionPlaceholder from './src/assets/images/session-placeholder.png';
import reviewPlaceholder from './src/assets/images/review-placeholder.png';
import coursePlaceholder from './src/assets/images/course-placeholder.png';
import recentActivityPlaceholder from './src/assets/images/recent-activity-placeholder.png';
import profilePlaceholder from './src/assets/images/profile-placeholder.jpg';

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
  {
    image: profileIcon,
    first_name: 'Michael',
    last_name: 'Brown',
    role: 'Editor',
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
    id: 1,
    image: sessionPlaceholder,
    title: 'Great Session',
    description: 'Awesome user engagement',
    status: '5 stars',
    role: 'Admin',
  },
  {
    id: 2,
    image: sessionPlaceholder,
    title: 'Feedback Needed',
    description: 'Interaction improvements suggested',
    status: 'Pending',
    role: 'Editor',
  },
];

export const contentReviewDetailData = {
  image: reviewPlaceholder,
  title: 'Maths - for Standard 3 Students | Episode 2',
  lesson_number: 49,
  completion_time: '1 Month',
  students: '12,000+',
  course_details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
  certification:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.',
  course_for:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.',
  what_you_learn: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  ],
};

export const reviewsData = [
  {
    image: sessionPlaceholder,
    title: 'Great Session',
    description: 'Awesome user engagement',
    status: '5 stars',
    role: 'Admin',
  },
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
    hasEdit: true,
  },
  {
    image: sessionPlaceholder,
    title: 'Feedback Needed',
    description: 'Interaction improvements suggested',
    status: 'Pending',
    role: 'Editor',
    hasEdit: true,
  },
  {
    image: sessionPlaceholder,
    title: 'Feedback Needed',
    description: 'Interaction improvements suggested',
    status: 'Pending',
    role: 'Editor',
    hasEdit: true,
  },
  {
    image: sessionPlaceholder,
    title: 'Feedback Needed',
    description: 'Interaction improvements suggested',
    status: 'Pending',
    role: 'Editor',
    hasEdit: true,
  },
];

export const courseData = [
  {
    image: coursePlaceholder,
    name: 'Course 1',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered .',
  },
  {
    image: coursePlaceholder,
    name: 'Course 2',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered .',
  },
  {
    image: coursePlaceholder,
    name: 'Course 3',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered .',
  },
  {
    image: coursePlaceholder,
    name: 'Course 4',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered .',
  },
];

export const recentActivityData = [
  {
    profile_picture: profilePlaceholder,
    first_name: 'Swift',
    last_name: 'Smith',
    image: recentActivityPlaceholder,
    title: 'Excited to start a new topic!',
    hashtags: ['learning'],
  },
  {
    profile_picture: profilePlaceholder,
    first_name: 'Swift',
    last_name: 'Smith',
    image: recentActivityPlaceholder,
    title: 'Excited to start a new topic!',
    hashtags: ['learning'],
  },
];
