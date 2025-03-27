import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '../types/auth-types';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;

  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearAuth: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      refreshToken: null,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => {
        localStorage.setItem('access_token', token);
        set({ token });
      },
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      clearAuth: () => {
        localStorage.removeItem('access_token');
        set({
          user: null,
          isAuthenticated: false,
          token: null,
          refreshToken: null,
        });
      },
    }),
    {
      name: 'auth-eju-quest-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
