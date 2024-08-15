import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUsername {
  usernameLogin: string;
  setUsername: (username: string) => void;
  deleteUsername: () => void;
}

export const useUserNameStore = create<IUsername>()(
  persist(
    (set) => ({
      usernameLogin: "",
      setUsername: (username) => set({ usernameLogin: username }),
      deleteUsername: () => set({ usernameLogin: "" }),
    }),
    {
      name: "username-storage", // Nome da chave no localStorage
      getStorage: () => localStorage, // Ou sessionStorage, se preferir
    }
  )
);
