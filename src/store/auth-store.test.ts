import { beforeEach, describe, expect, it } from 'vitest';
import useAuthStore from './auth-store';

const parent = {
  id: 1,
  first_name: 'Peter',
  last_name: 'Smith',
  email: 'peter@example.com',
  role: 'parent',
};

describe('Zustand authentication state', () => {
  beforeEach(() => {
    localStorage.clear();
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isSessionReady: false,
      token: null,
    });
  });

  it('sets the user, access token and authenticated state', () => {
    useAuthStore.getState().setSession(parent, 'access-token');

    expect(useAuthStore.getState()).toMatchObject({
      user: parent,
      isAuthenticated: true,
      token: 'access-token',
    });
  });

  it('keeps the access token in memory only', () => {
    useAuthStore.getState().setToken('access-token');

    expect(useAuthStore.getState().token).toBe('access-token');
    expect(localStorage.getItem('access_token')).toBeNull();
    expect(localStorage.getItem('auth-eju-quest-storage')).toBeNull();
  });

  it('clearAuth removes the user and access token from memory', () => {
    useAuthStore.getState().setSession(parent, 'access-token');
    useAuthStore.getState().clearAuth();

    expect(useAuthStore.getState()).toMatchObject({
      user: null,
      isAuthenticated: false,
      token: null,
    });
  });
});
