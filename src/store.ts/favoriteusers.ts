
// src/store/userGlobalData.ts
import { create } from 'zustand';
import { FavoriteProps } from '../@types/githubusers';

export interface StoreProps {
  data: FavoriteProps[];
  upDateData: (data: FavoriteProps) => void;
  removeData: (toDeleteName: string) => void;
  
}

const useUserGlobalData = create<StoreProps>((set) => ({
  data: [],
  upDateData: (toUpdateData: FavoriteProps) => set((state) => ({
    data: [...state.data, toUpdateData]
  })),
  removeData: (toDeleteName: string) => set((state) => ({
    data: state.data.filter((user : FavoriteProps) => user.name !== toDeleteName)
  })),
}));

export default useUserGlobalData;
