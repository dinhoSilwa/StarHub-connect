import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUsername {
  userNameProfile: string;
  setGithubProfileName: (username: string) => void;
  clearGithubProfileName: () => void;
}

export const userProfileGithubName = create<IUsername>()(
  persist(
    (set) => ({
      userNameProfile: "",
      setGithubProfileName: (newUserNameProfile) => set({ userNameProfile: newUserNameProfile }),
      clearGithubProfileName: () => set({ userNameProfile: "" }),
    }),
    {
      name: "username-storage", // Nome da chave no localStorage
      getStorage: () => localStorage, // Ou sessionStorage, se preferir
    }
  )
);
