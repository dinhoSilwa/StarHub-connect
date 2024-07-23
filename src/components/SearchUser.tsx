import { formaterForSearch } from "../utils/stringutils";
import { userNameTerm } from "../store/searchResults";
import { searcGithubUser } from "../controller/getgithubers";
import { foundUserStore } from "../store/githubfound";

export const Search = () => {
  const { term, updateTerm } = userNameTerm();
  const { updateUserFound, setLoading, setError } = foundUserStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const username = formaterForSearch(value);
    updateTerm(username);
  };

  const searchUserByUserName = () => {
    setLoading(true);
    searcGithubUser(`https://api.github.com/users/${term}`)
      .then((res) => {
        updateUserFound(res), setLoading(false);
      })
      .catch((err) => {
        console.log("Falha ao obter Dados", err), setError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form action="" className="flex flex-col px-4 py-4 gap-2">
        <label
          htmlFor="githubsearch"
          className="text-[10px] font-semibold text-zinc-700 font-LexendFont"
        >
          Buscar no Github
        </label>
        <fieldset className="flex gap-1">
          <input
            id="githubsearch"
            type="text"
            value={term}
            placeholder="Github name"
            onChange={handleSearch}
            className=" flex-1 bg-white pl-2 rounded-md py-2 placeholder:text-[12px] font-bold text-purple-800 text-[14px] h-12"
          />{" "}
          <button
            type="button"
            onClick={searchUserByUserName}
            className="bg-purple-700  text-white font-medium px-2 rounded-lg text-[12px]"
          >
            Procurar
          </button>
        </fieldset>
      </form>
    </>
  );
};
