import { create } from 'zustand';

export const stateDashboard = create(set => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
