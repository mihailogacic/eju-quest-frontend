import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Quiz from './Quiz';
import theme from '../theme';
import { useLessonQuiz, useSubmitQuiz } from '../hooks/lessons-hook';

vi.mock('../hooks/lessons-hook', () => ({
  useLessonQuiz: vi.fn(),
  useSubmitQuiz: vi.fn(),
}));

vi.mock('../components/quiz/Timeout', () => ({
  default: () => <div>Timeout: 05:00</div>,
}));

const mockedQuiz = vi.mocked(useLessonQuiz);
const mockedSubmit = vi.mocked(useSubmitQuiz);

const data = {
  id: 7,
  lesson_detail: {
    id: 42,
    title: 'Planets',
    image: '',
    age_level: 10,
    lesson_length: 'short' as const,
    status: 'approved',
    creator: 'Parent',
    description: '',
  },
  questions: [
    {
      id: 1,
      question_text: 'Which is the third planet?',
      options: [
        { id: 11, option: 'A', option_text: 'Earth' },
        { id: 12, option: 'B', option_text: 'Mars' },
      ],
    },
  ],
};

const renderQuiz = () =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/quiz/42']}>
        <Routes>
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

describe('quiz display and submission', () => {
  const submit = vi.fn();

  beforeEach(() => {
    mockedSubmit.mockReturnValue({
      mutate: submit,
    } as unknown as ReturnType<typeof useSubmitQuiz>);
    mockedQuiz.mockReturnValue({
      data,
      isPending: false,
      isError: false,
    } as unknown as ReturnType<typeof useLessonQuiz>);
  });

  it('does not reveal the correct answer before submission', () => {
    renderQuiz();
    expect(screen.getByText('Earth')).toBeInTheDocument();
    expect(screen.getByText('Mars')).toBeInTheDocument();
    expect(screen.queryByText(/correct/i)).not.toBeInTheDocument();
  });

  it('submits the selected answer and displays the server result', async () => {
    const user = userEvent.setup();
    submit.mockImplementation((_payload, options) => {
      options?.onSuccess?.({
        score: 100,
        correct_answers: 1,
        total_questions: 1,
        passed: true,
      });
    });
    renderQuiz();
    await user.click(screen.getByRole('radio', { name: 'Earth' }));
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(submit).toHaveBeenCalledWith(
      {
        lesson_id: 42,
        answers: [{ question_id: 1, selected_option: 'A' }],
        remaining_time: 300,
      },
      expect.any(Object)
    );
    expect(await screen.findByText(/100/)).toBeInTheDocument();
  });
});
