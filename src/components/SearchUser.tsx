import { formaterForSearch } from "../utils/stringutils";
import { userNameTerm } from "../store/searchResults";
import { searcGithubUser } from "../controller/getgithubers";
import { foundUserStore } from "../store/githubfound";
import { FavoriteStorage } from "../store/Favorites";
import clsx from "clsx";
import { UserFound } from "./userfound";
import { Delete, Search } from "lucide-react";

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
    if (term === "") {
      alert("Digite alguma coisa");
      return;
    }
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
      <form
        action=""
        className="flex flex-col py-8 gap-4 small:px-4 bg-slate-200 w-[95%] rounded-xl mr-auto ml-auto mt-4 mb-8 px-2"
      >
        <label
          htmlFor="githubsearch"
          className="text-[10px] font-semibold text-slate-700 font-LexendFont small:text-[12px]"
        >
          Buscar no Github
        </label>
        <fieldset className="flex gap-1">
          <input
            id="githubsearch"
            type="text"
            value={term}
            placeholder="Github name"
            required={true}
            onChange={handleSearch}
            className="w-[80%] bg-white pl-2 rounded-lg py-2 placeholder:text-[12px] font-bold text-purple-800 text-[14px] h-12 small:text-[16px]"
          />{" "}
          <button
            type="button"
            onClick={searchUserByUserName}
            className={clsx(
              "bg-purple-700 text-white font-medium px-2 rounded-lg text-[12px] w-[60px] grid place-content-center",
              { "bg-zinc-400": userFound.length > 0 }
            )}
            disabled={userFound.length > 0 ? true : false}
          >
            {userFound.length > 0 ? <Delete /> : <Search size={24} />}
          </button>
        </fieldset>
        <UserFound />
      </form>
    </>
  );
};
