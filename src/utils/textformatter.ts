export const formaterForSearch = (term : string) =>{
  const newTerm = term.trim().toLowerCase().replace(/\s+/g, '')
  return newTerm
}