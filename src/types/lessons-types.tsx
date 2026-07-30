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

export type GeneratedLessonResults = {
  title: string;
  content: LessonContent[];
  questions: LessonQuestion[];
};

export type GenerateLessonResponse = {
  status: 'processing' | 'completed';
  result?: GeneratedLessonResults;
  task_id?: string;
  prompt_input?: GenerateLessonInput;
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

export type FinishedTopicCard = {
  id: number | string;
  child_id: number | string;
  title: string;
  lesson_image: string;
  child_username: string;
  completed_at?: string;
  passed: boolean;
};

type OptionKeys = 'A' | 'B' | 'C' | 'D';

type Answers = {
  correct: boolean;
  options: Record<OptionKeys, string>;
  question_text: string;
  correct_option: OptionKeys;
  selected_option: OptionKeys;
};

type QuizResults = {
  answers: Answers[];
  child_username: string;
  correct_answers: number;
  created_at: string;
  id: number | string;
  lesson_image: string;
  passed: boolean;
  remaining_time: number;
  score: number;
  total_questions: number;
};

type FinishedSummary = {
  id: number | string;
  description: string;
  created_at: string;
  remaining_time: number;
};

export type TopicResultsTypes = {
  child_username: string;
  lesson_title: string;
  quiz_results: QuizResults;
  summary: FinishedSummary | null;
};

type QuizOption = {
  id: number;
  option: string;
  option_text: string;
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
};

export type QuestionResponseTypes = {
  id: number | string;
  lesson_detail: QuizLessonDetail;
  questions: QuizQuestion[];
};

export type SubmitQuizAnswer = {
  question_id: number;
  selected_option: string;
};

export type SubmitQuizPayload = {
  lesson_id: number;
  answers: SubmitQuizAnswer[];
};
