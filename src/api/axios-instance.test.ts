import {
  AxiosError,
  AxiosHeaders,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('./auth-session', () => ({
  refreshSession: vi.fn(),
}));

import { refreshSession } from './auth-session';
import axiosInstance from './axios-instance';
import useAuthStore from '../store/auth-store';

describe('Axios automatic access token refresh', () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isSessionReady: true,
      token: 'expired-access-token',
    });
    vi.mocked(refreshSession).mockReset();
  });

  it('refreshes the token after a 401 and retries the request once', async () => {
    vi.mocked(refreshSession).mockResolvedValue('new-access-token');
    let attempts = 0;

    axiosInstance.defaults.adapter = vi.fn(
      async (config: InternalAxiosRequestConfig): Promise<AxiosResponse> => {
        attempts += 1;
        if (attempts === 1) {
          const response: AxiosResponse = {
            data: { detail: 'Token expired.' },
            status: 401,
            statusText: 'Unauthorized',
            headers: {},
            config,
          };
          throw new AxiosError(
            'Unauthorized',
            'ERR_BAD_REQUEST',
            response.config,
            undefined,
            response
          );
        }

        return {
          data: { ok: true },
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        };
      }
    );

    const response = await axiosInstance.get('/users/profile/');

    expect(response.data).toEqual({ ok: true });
    expect(refreshSession).toHaveBeenCalledTimes(1);
    expect(attempts).toBe(2);
    const repeatedConfig = vi.mocked(axiosInstance.defaults.adapter).mock
      .calls[1][0];
    expect(AxiosHeaders.from(repeatedConfig.headers).get('Authorization')).toBe(
      'Bearer new-access-token'
    );
  });
});
