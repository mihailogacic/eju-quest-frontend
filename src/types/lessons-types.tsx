export type PendingLessonsTypes = {
  id: number | string;
  title: string;
  image: string;
  age_level: number;
  lesson_length: string;
  status: string;
  creator: string;
}[];

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
