import { create } from "zustand";
import { GithubersType } from "../@types/githubusers";

interface UserProps {
  userFound: GithubersType[],
  isloading : boolean,
  erroFound : boolean;
  updateUserFound: (userFound : GithubersType) =>void;
  deleteUserFound: () => void;
  setLoading : (loading : boolean) => void;
  setError : (Error : boolean) => void;
  addStack : (id : string, stackname : string) => void;
}

export const foundUserStore = create<UserProps>()((set) =>({
  userFound : [],
  isloading : false,
  erroFound : false,

  updateUserFound: (found: GithubersType) => set((state) =>({
    userFound: [...state.userFound, found],
    isloading : false, 
    erroFound : false
  })),

  addStack: (id: string, stackname: string) => set((state) => ({
    userFound: state.userFound.map((item) =>
      item.id === id ? { ...item, stack: stackname.toLowerCase() } as GithubersType : item
    )
  })),
  
  deleteUserFound :() => set({userFound : []}),
  setLoading : (loading : boolean) => set({isloading : loading}),
  setError : (Error : boolean) => set({erroFound : Error})

}))