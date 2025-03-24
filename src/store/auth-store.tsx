import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthState = {
  // eslint-disable-next-line
  user: any | null;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;

  // eslint-disable-next-line
  setUser: (user: any | null) => void;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearAuth: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      // TODO: set back to false
      isAuthenticated: true,
      token: null,
      refreshToken: null,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      clearAuth: () =>
        set({
          user: null,
          isAuthenticated: false,
          token: null,
          refreshToken: null,
        }),
    }),
    {
      name: 'auth-eju-quest-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
