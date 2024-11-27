import { create } from 'zustand';

export const useName = create(set => ({
  names: [], // Holatni to'g'ri nomlash
  setNames: newNames => set({ names: newNames }), // Massivni butunlay yangilash uchun
  addName: name => set(state => ({ names: [...state.names, name] })), // Yangi ism qo'shish
}));
