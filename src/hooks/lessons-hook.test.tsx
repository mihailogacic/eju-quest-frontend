import { ReactNode } from 'react';
import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useGetGeneratedContent } from './lessons-hook';
import { getGeneratedContent } from '../services/lessons-api';

vi.mock('../services/lessons-api', () => ({
  getGeneratedContent: vi.fn(),
}));

const mockedGetGeneratedContent = vi.mocked(getGeneratedContent);

describe('lesson generation status polling', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    vi.useFakeTimers();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
    mockedGetGeneratedContent.mockResolvedValue({ status: 'processing' });
  });

  afterEach(() => {
    queryClient.clear();
    vi.useRealTimers();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('does not send a request without a task identifier', async () => {
    renderHook(() => useGetGeneratedContent(null), { wrapper });
    await act(async () => {
      await Promise.resolve();
    });
    expect(mockedGetGeneratedContent).not.toHaveBeenCalled();
  });

  it('polls the status every five seconds', async () => {
    renderHook(() => useGetGeneratedContent('task-1'), { wrapper });
    await act(async () => {
      await Promise.resolve();
    });
    expect(mockedGetGeneratedContent).toHaveBeenCalledWith('task-1');

    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000);
    });
    expect(mockedGetGeneratedContent.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
