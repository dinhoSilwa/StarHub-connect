import { create } from "zustand"

export interface SearchTerms {
  term: string,
  updateTerm: (term: string) => void;
  deleteTerm: () => void;
}
export const userNameTerm = create<SearchTerms>()((set) => ({
  term: '',
  updateTerm: (newterm: string) => set({term: newterm}),
  deleteTerm: () => set({term : ''})
}))