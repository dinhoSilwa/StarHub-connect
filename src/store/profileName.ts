import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GithubUserResponse } from "../@types/githubusers";

interface ProfileName {
  AuthProfile: GithubUserResponse[] | null;
  setGithubProfileName: (data: GithubUserResponse[]) => void;
  clearGithubProfileName: () => void;
}

export const userProfileGithubName = create<ProfileName>()(
  persist(
    (set) => ({
      AuthProfile: null,
      setGithubProfileName: (data: GithubUserResponse[]) =>
        set({ AuthProfile: data }),
      clearGithubProfileName: () => set({ AuthProfile: null }),
    }),
    {
      name: "username-storage", // Nome da chave no localStorage
      getStorage: () => localStorage, // Ou sessionStorage, se preferir
    }
  )
);
