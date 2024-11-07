import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ToggleInterface {
  theme: boolean;
  setTheme: () => void;
  currentTheme: () => void;
}

export const useToggleTheme = create<ToggleInterface>()(
  persist(
    (set, get) => ({
      theme: false, 
      setTheme: () => {
        const newTheme = !get().theme; 
        set({ theme: newTheme });
        document.documentElement.classList.toggle('dark', newTheme);
        document.documentElement.classList.toggle('light', !newTheme);
      },
      currentTheme: () => {
        const currentTheme = get().theme; 
        document.documentElement.classList.toggle('dark', currentTheme);
        document.documentElement.classList.toggle('light', !currentTheme);
      }
    }),
    {
      name: "themeStorage",
      getStorage: () => localStorage, 
    }
  )
);
