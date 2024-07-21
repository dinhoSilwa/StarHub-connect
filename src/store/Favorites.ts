import { create } from "zustand";
import { GithubersType } from "../@types/githubusers";
import { persist } from "zustand/middleware";

export interface FavoriteProps {
  favoriteDataBase: GithubersType[];
  saveFavorites: (favorite: GithubersType) => void; 
  deleteFavorites: (id: string) => void;
}

export const FavoriteStorage = create<FavoriteProps>()(
  persist(
    (set) => ({
      favoriteDataBase: [],
      saveFavorites: (favorite: GithubersType) => set((state) => ({
        favoriteDataBase: [...state.favoriteDataBase, favorite],
      })),
      deleteFavorites: (id: string) => set((state) => ({
        favoriteDataBase: state.favoriteDataBase.filter((favorite) => favorite.id !== id),
      })),
    }),
    {
      name: "favorite-storage",
    }
  )
);
