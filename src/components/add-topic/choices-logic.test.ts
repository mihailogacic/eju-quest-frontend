import { describe, expect, it } from 'vitest';
import {
  createDefaultQuestionState,
  formatQuestionsForApi,
  isQuestionFormValid,
  mergeGeneratedQuestions,
} from './choices-logic';

const generated = Array.from({ length: 5 }, (_, index) => ({
  question: `Generated question ${index + 1}`,
  options: Array.from('ABCD', (option) => ({
    option,
    text: `Answer ${index + 1}${option}`,
  })),
  answer: 'A',
}));

describe('generated question editing and serialization', () => {
  it('maps a question, four options and the answer label', () => {
    const editable = mergeGeneratedQuestions(
      createDefaultQuestionState(),
      generated
    );
    expect(editable[0]).toEqual({
      question: 'Generated question 1',
      options: ['Answer 1A', 'Answer 1B', 'Answer 1C', 'Answer 1D'],
      answerIndex: 0,
    });
    expect(isQuestionFormValid(editable)).toBe(true);
  });

  it('serializes user edits in the format expected by the backend', () => {
    const editable = mergeGeneratedQuestions(
      createDefaultQuestionState(),
      generated
    );
    editable[0].question = 'Edited question';
    editable[0].answerIndex = 2;
    const payload = formatQuestionsForApi(editable);
    expect(payload[0].question).toBe('Edited question');
    expect(payload[0].answer).toBe('C');
    expect(payload[0].options).toHaveLength(4);
  });

  it('keeps all five generated questions', () => {
    const editable = mergeGeneratedQuestions(
      createDefaultQuestionState(),
      generated
    );
    expect(editable).toHaveLength(5);
    expect(editable.map((question) => question.question)).toContain(
      'Generated question 5'
    );
  });
});
