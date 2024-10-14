import { create } from "zustand";
import type { GithubResponseInterface } from "../@types/githubusers";
import { persist } from "zustand/middleware";

type ProfileProps = {
  dataUser: GithubResponseInterface | null;
  setDataUser: (user: GithubResponseInterface) => void;
  deleteDataUser: () => void;
};

export const ProfileStore = create<ProfileProps>()(
  persist(
    (set) => ({
      dataUser: null,
      setDataUser: (user: GithubResponseInterface) => set({ dataUser: user }),
      deleteDataUser: () => set({ dataUser: null }),
    }),
    {
      name: "userData",
      getStorage: () => localStorage,
    }
  )
);
