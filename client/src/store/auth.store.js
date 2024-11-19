import { create } from 'zustand';

export const authStore = create(set => ({
  isLoading: false,
  isAuth: false,
  user: {},
  setUser: user => set({ user }),
  setLoading: bool => set({ isLoading: bool }),
  setIsAuth: bool => set({ isAuth: bool }),
}));
