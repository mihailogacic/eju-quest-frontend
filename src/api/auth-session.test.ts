import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useAuthStore from '../store/auth-store';
import { refreshSession } from './auth-session';

const parent = {
  id: 1,
  first_name: 'Peter',
  last_name: 'Smith',
  email: 'parent@example.com',
  role: 'parent',
};

describe('session restoration through an HttpOnly cookie', () => {
  beforeEach(() => {
    localStorage.clear();
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isSessionReady: false,
      token: null,
    });
    vi.restoreAllMocks();
  });

  it('requests a new access token with credentials enabled', async () => {
    const post = vi.spyOn(axios, 'post').mockResolvedValue({
      data: {
        access_token: 'new-access-token',
        user: parent,
      },
    });

    const token = await refreshSession();

    expect(token).toBe('new-access-token');
    expect(post).toHaveBeenCalledWith(
      expect.stringContaining('/auth/token/refresh/'),
      {},
      { withCredentials: true }
    );
    expect(useAuthStore.getState()).toMatchObject({
      user: parent,
      token: 'new-access-token',
      isAuthenticated: true,
    });
    expect(localStorage.length).toBe(0);
  });

});
