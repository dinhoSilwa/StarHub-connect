import { Archive, EraserIcon, Layers, Loader, Star, User2 } from "lucide-react";
import { foundUserStore } from "../store/githubfound";
import { FavoriteStorage } from "../store/Favorites";
import { GithubersType } from "../@types/githubusers";
import { stacksList } from "../model/allfavorites";
import { useState } from "react";
import clsx from "clsx";

export const UserFound = () => {
  const { isloading, erroFound, userFound, deleteUserFound, addStack } =
    foundUserStore();
  const { saveFavorites } = FavoriteStorage();
  const [openStackModal, setopenStackModal] = useState(false);
  const [isStack, setisStack] = useState("");

  if (isloading)
    return (
      <main className="flex gap-2">
        <Loader className="animate animate-spin" /> Buscando no Github ...
      </main>
    );
  if (erroFound) return <div>Não Encontrado</div>;

  const handleSaveFavorites = () => {
    const githubTosave: { [key: string]: GithubersType } = userFound.reduce(
      (acc, item) => {
        acc[item.id] = item;
        return acc;
      },
      {} as { [key: string]: GithubersType }
    );

    Object.values(githubTosave).forEach((githuber) => saveFavorites(githuber));
  };

  const saveFavoriteUser = () => {
    setopenStackModal(false);
    handleSaveFavorites();
    deleteUserFound();
    setisStack("")
    
  };

  const handleDeleteFounds = () =>{
    setisStack("")
    deleteUserFound()
    setopenStackModal(false)
    
  }
  return (
    <article>
    {userFound.map(
        (
          {
            id,
            avatar_url,
            name,
            login,
            public_repos,
            followers,
            stack,
            totalStart,
          },
          index
        ) => (
          <section className="rounded-lg bg-white px-6 w-[90%] ml-auto mr-auto">
            <div className=" flex justify-end items-center pt-2">
              <button
                type="button"
                className=" h-8 text-purple-dark bg-purple-dark-white font-semibold px-2 rounded-md flex items-center gap-1 text-[8px] "
                onClick={handleDeleteFounds}
              >
                <EraserIcon size={12} /> Limpar busca
              </button>
            </div>

            <section
              key={index}
              className="flex justify-between items-center ml-auto mr-auto py-8 rounded-lg font-Montserrat shadow-sm border-zinc-200"
            >
              {openStackModal ? null : (
                <header className="flex flex-col gap-2">
                  <img
                    src={avatar_url}
                    alt=""
                    className="w-16 h-16 rounded-md"
                  />
                  <div className=" flex-col">
                    <h2 className="text-[14px] font-bold text-zinc-900">
                      {name}
                    </h2>
                    <h3 className="text-[10px] text-zinc-800">@{login}</h3>
                    {stack}
                  </div>
                </header>
              )}

              <section
                className={clsx("w-1/2 flex flex-col items-center gap-2", {
                  "w-full": openStackModal,
                })}
              >
                {openStackModal ? (
                  <ul className="flex gap-2 flex-wrap overflow-hidden">
                    {stacksList.map(({ stackname }, index) => {
                      return (
                        <>
               {
                stackname === "Todas" ? null : <li
                key={index}
                className={clsx(
                  "bg-purple-300 text-purple-800 px-2 font-bold rounded-md py-2 cursor-pointer text-[8px] flex items-center",
                  {
                    "bg-purple-800 text-white":
                      isStack === stackname,
                  }
                )}
                onClick={() => {
                  addStack(id, stackname), setisStack(stackname);
                }}
              >
                {stackname}
              </li>
               }
                        </>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="flex gap-4">
                    <li
                      className="w-8 flex flex-col items-center justify-center gap-2"
                      title="Quantidade de Repositorios públicos"
                    >
                      <Archive className="text-yellow-icon" size={18} />{" "}
                      <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                        {public_repos}
                      </p>
                    </li>

                    <li
                      className="w-8 flex flex-col items-center justify-center gap-2"
                      title="Total de Estrelas Recebidas"
                    >
                      <Star className="text-yellow-icon" size={18} />{" "}
                      <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                        {totalStart}
                      </p>
                    </li>

                    <li
                      className="w-8 flex flex-col items-center justify-center gap-2"
                      title="Total de Seguidores"
                    >
                      <User2 className="text-yellow-icon" size={18} />{" "}
                      <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                        {followers}
                      </p>
                    </li>
                  </ul>
                )}

                {openStackModal ? (
                  <button
                    type="button"
                    className={clsx(
                      " h-8 w-full  font-semibold rounded-md flex items-center gap-2 text-[12px] px-2 justify-center",
                      { " text-white bg-purple-dark": isStack.length > 0 }, {"bg-zinc-300 text-zinc-900" : isStack === ""}
                    )}
                    onClick={saveFavoriteUser}
                  >
                    <Layers size={16} /> Favoritar
                  </button>
                ) : (
                  <button
                    type="button"
                    className=" h-8 w-full bg-purple-dark text-white font-semibold rounded-md flex items-center gap-1 text-[12px] px-2 justify-center"
                    onClick={() => setopenStackModal(!openStackModal)}
                  >
                    <Layers size={16} /> Adicionar
                  </button>
                )}
              </section>
            </section>
          </section>
        )
      )}
    </article>
  );
};
