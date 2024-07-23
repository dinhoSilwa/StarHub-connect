export const formaterForSearch = (term : string) =>{
  const newTerm = term.trim().toLowerCase().replace(/\s+/g, '')
  return newTerm
}

export const extractFirstAndSecondName = (fullname: string) => {
  if (fullname === null) return "";
  const namesParts = fullname.split(" ");
  if (namesParts.length < 2) {
    return fullname;
  }
  return `${namesParts[0]} ${namesParts[1]}`;
};