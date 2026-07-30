export type GeneratedQuestion = {
  question: string;
  options: {
    option: string;
    text: string;
  }[];
  answer: string;
};

export type EditableQuestion = {
  question: string;
  options: string[];
  answerIndex: number | null;
};

export const EDITABLE_QUESTION_COUNT = 5;

export const createDefaultQuestionState = (): EditableQuestion[] =>
  Array.from({ length: EDITABLE_QUESTION_COUNT }, () => ({
    question: '',
    options: Array.from({ length: 4 }, () => ''),
    answerIndex: null,
  }));

export const mergeGeneratedQuestions = (
  previous: EditableQuestion[],
  generated: GeneratedQuestion[]
): EditableQuestion[] => {
  const mapped = generated.map((question) => ({
    question: question.question,
    options: question.options.map((option) => option.text),
    answerIndex: question.options.findIndex(
      (option) => option.option === question.answer
    ),
  }));

  return previous.map((current, index) => mapped[index] ?? current);
};

export const formatQuestionsForApi = (questions: EditableQuestion[]) =>
  questions.map((question) => ({
    question: question.question,
    options: question.options.map((text, index) => ({
      option: String.fromCharCode(65 + index),
      text,
    })),
    answer: String.fromCharCode(65 + (question.answerIndex ?? 0)),
  }));

export const isQuestionFormValid = (questions: EditableQuestion[]) =>
  questions.every((question) => {
    const hasQuestion = question.question.trim() !== '';
    const allOptionsFilled = question.options.every(
      (option) => option.trim() !== ''
    );
    return hasQuestion && allOptionsFilled && question.answerIndex !== null;
  });
