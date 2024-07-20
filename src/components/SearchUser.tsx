import { formaterForSearch } from "../utils/textformatter";
import { userNameTerm } from "../store/searchResults";
import { searcGithubUser } from "../controller/getgithubers";
import { foundUserStore } from "../store/githubfound";

export const Search = () => {
  const { term, updateTerm } = userNameTerm()
  const { updateUserFound , setLoading, setError} = foundUserStore()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const username = formaterForSearch(value);
    updateTerm(username)
  };

  const searchUserByUserName = () => {
    setLoading(true)
    searcGithubUser(`https://api.github.com/users/${term}`)
      .then(res => {updateUserFound(res), setLoading(false)})
      .catch(err => { console.log("Falha ao obter Dados", err), setError(true) }).finally(()=> setLoading(false))
  }
  
  return (
    <>
      <form action="">
        <fieldset>
          <label htmlFor="Digite o nickname"></label>
          <input
            type="text"
            value={term}
            placeholder="Digite o username do Github"
            onChange={handleSearch}
          />{" "}
          <button type="button" onClick={searchUserByUserName}>
            Procurar
          </button>
        </fieldset>
      </form>
    </>
  )
}