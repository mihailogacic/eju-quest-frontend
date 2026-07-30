import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ContentReviewDetail from './ContentReviewDetail';
import {
  useApproveLesson,
  useDeleteLesson,
  useLessonDetail,
} from '../hooks/lessons-hook';

vi.mock('../hooks/lessons-hook', () => ({
  useLessonDetail: vi.fn(),
  useApproveLesson: vi.fn(),
  useDeleteLesson: vi.fn(),
}));

const mockedDetail = vi.mocked(useLessonDetail);
const mockedApprove = vi.mocked(useApproveLesson);
const mockedDelete = vi.mocked(useDeleteLesson);

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={['/pending-content/12']}>
      <Routes>
        <Route path='/pending-content/:id' element={<ContentReviewDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe('lesson review, approval and deletion', () => {
  const approve = vi.fn();
  const deleteLesson = vi.fn();

  beforeEach(() => {
    mockedApprove.mockReturnValue({
      mutate: approve,
    } as unknown as ReturnType<typeof useApproveLesson>);
    mockedDelete.mockReturnValue({
      mutate: deleteLesson,
      isPending: false,
    } as unknown as ReturnType<typeof useDeleteLesson>);
  });

  it('shows a progress indicator while loading the lesson', () => {
    mockedDetail.mockReturnValue({
      isPending: true,
      isError: false,
      data: undefined,
    } as unknown as ReturnType<typeof useLessonDetail>);
    renderPage();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows an error message when the API request fails', () => {
    mockedDetail.mockReturnValue({
      isPending: false,
      isError: true,
      data: undefined,
    } as unknown as ReturnType<typeof useLessonDetail>);
    renderPage();
    expect(screen.getByText('Error loading data')).toBeInTheDocument();
  });

  it('approves and confirms deletion of the displayed lesson', async () => {
    const user = userEvent.setup();
    mockedDetail.mockReturnValue({
      isPending: false,
      isError: false,
      data: {
        id: 12,
        title: 'Planets',
        image: '',
        age_level: 10,
        lesson_length: 'short',
        status: 'pending',
        sections: [{ heading: 'INTRODUCTION', content: 'Lesson text' }],
      },
    } as unknown as ReturnType<typeof useLessonDetail>);
    renderPage();
    await user.click(screen.getByRole('button', { name: 'Approve' }));
    expect(approve).toHaveBeenCalledWith(12);

    await user.click(screen.getByRole('button', { name: 'Delete topic' }));
    expect(
      screen.getByText('Are you sure you want to delete this topic?')
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: "Yes, I'm sure" }));
    expect(deleteLesson).toHaveBeenCalledWith(12);
  });
});
