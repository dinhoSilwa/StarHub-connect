import { create } from "zustand";
import type { GithubUserResponse } from "../@types/githubusers";

export interface SearchTerms {
  term: string;
  userFound: GithubUserResponse | null;
  setUserFound: (data: GithubUserResponse) => void;
  setSearchTerm: (term: string) => void;
  clearTerm: () => void;
  isActiveSearch: boolean;
  setIsActiveSearchModal: () => void;
}

export const SerachUsername = create<SearchTerms>((set) => ({
  isActiveSearch: false,
  term: "",
  userFound: null,
  setIsActiveSearchModal: () =>
    set((state) => ({ isActiveSearch: !state.isActiveSearch })),

  setSearchTerm: (newTerm: string) =>
    set({
      term: newTerm.replace(/\s+/g, "").trim().toLowerCase(),
    }),
  setUserFound: (data: GithubUserResponse) => set({ userFound: data }),

  clearTerm: () => set({ term: "" , userFound : null}),
}));
