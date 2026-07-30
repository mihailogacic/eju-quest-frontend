import { create } from 'zustand';
import { User } from '../types/auth-types';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isSessionReady: boolean;
  token: string | null;

  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setSession: (user: User, token: string) => void;
  setSessionReady: (isSessionReady: boolean) => void;
  clearAuth: () => void;
};

const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  isSessionReady: false,
  token: null,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token }),
  setSession: (user, token) =>
    set({
      user,
      token,
      isAuthenticated: true,
    }),
  setSessionReady: (isSessionReady) => set({ isSessionReady }),
  clearAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      token: null,
    }),
}));

export default useAuthStore;
