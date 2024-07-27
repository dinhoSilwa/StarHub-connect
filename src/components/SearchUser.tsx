import { formaterForSearch } from "../utils/stringutils";
import { userNameTerm } from "../store/searchResults";
import { searcGithubUser } from "../controller/getgithubers";
import { foundUserStore } from "../store/githubfound";
import { FavoriteStorage } from "../store/Favorites";
import clsx from "clsx";

export const SearchUser = () => {
  const { term, updateTerm } = userNameTerm();
  const { updateUserFound, setLoading, setError, userFound } = foundUserStore();
  const { favoriteDataBase } = FavoriteStorage();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const username = formaterForSearch(value);
    updateTerm(username);
  };

  const searchUserByUserName = () => {
    const getAllUser = favoriteDataBase.some(
      (userLogin) => userLogin.login == term
    );

    if (getAllUser) {
      alert("Usuário já Encontrado Antes");
      console.log(getAllUser);
      return;
    }

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
            className={clsx(
              "bg-purple-700  text-white font-medium px-2 rounded-lg text-[12px] w-[70px]",
              { "bg-zinc-400": userFound.length > 0 }
            )}
            disabled={userFound.length > 0 ? true : false}
          >
            Buscar
          </button>
        </fieldset>
      </form>
    </>
  );
};
