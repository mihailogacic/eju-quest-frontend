export type RecommendedCoursesTypes = {
  id: number | string;
  title: string;
  image: string;
  age_level: number;
  lesson_length: 'short' | 'medium' | 'long';
  status: 'approved' | 'unapproved';
  creator: string;
};

export type RecentActivityTypes = {
  id: number | string;
  title: string;
  image: string;
  age_level: number;
  lesson_length: 'short' | 'medium' | 'long';
  status: 'approved' | 'unapproved';
  creator: string;
};

export type PendingLessonsTypes = {
  recommended_courses: RecommendedCoursesTypes[];
  recent_activity: RecentActivityTypes[];
};

export type GenerateLessonInput = {
  title: string;
  age_level: number;
  lesson_length: 'short' | 'medium' | 'long';
};

export type LessonContent = {
  heading: string;
  text: string;
};

export type LessonQuestion = {
  question: string;
  options: {
    option: string;
    text: string;
  }[];
  answer: string;
};

export type GenerateLessonResponse = {
  lesson: {
    content: LessonContent[];
    questions: LessonQuestion[];
  };
  prompt_input: GenerateLessonInput;
};

export type SubmitLessonPayload = {
  title: string;
  age_level: number;
  lesson_length: 'short' | 'medium' | 'long';
  content: {
    heading: string;
    text: string;
  }[];
  questions: {
    question: string;
    options: {
      option: string;
      text: string;
    }[];
    answer: string;
  }[];
};

export type LessonSection = {
  heading: string;
  content: string;
};

export type LessonDetail = {
  id: number | string;
  title: string;
  image: string;
  age_level: number;
  lesson_length: 'short' | 'medium' | 'long';
  status: string;
  sections: LessonSection[];
};

type QuizOption = {
  id: number;
  option: string;
  option_text: string;
  correct: boolean;
};

type QuizLessonDetail = {
  age_level: number;
  creator: string;
  description: string;
  image: string;
  id: number | string;
  lesson_length: 'short' | 'medium' | 'long';
  status: string;
  title: string;
};

export type QuizQuestion = {
  id: number;
  question_text: string;
  options: QuizOption[];
  correct_option: string;
};

export type QuestionResponseTypes = {
  id: number | string;
  lesson_detail: QuizLessonDetail;
  questions: QuizQuestion[];
};
