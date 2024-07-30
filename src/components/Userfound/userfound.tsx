import {
  Archive,
  EraserIcon,
  Layers,
  Star,
  User2,
} from "lucide-react";
import { foundUserStore } from "../../store/githubfound";
import { FavoriteStorage } from "../../store/Favorites";
import { GithubersType } from "../../@types/githubusers";
import { useState } from "react";
import clsx from "clsx";
import { SelectStackList } from "../Stacklist/SelectStackList";
import { LoadingUser } from "./loadinguser";
import { NotfoundUser } from "./notFounduser";

export const UserFound = () => {
  const { isloading, erroFound, userFound, deleteUserFound, addStack } =
    foundUserStore();
  const { saveFavorites } = FavoriteStorage();
  const [openStackModal, setopenStackModal] = useState(false);
  const [isStack, setisStack] = useState("");

  if (isloading) return <LoadingUser />;
  if (erroFound) return <NotfoundUser />;

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
    setisStack("");
  };

  const handleDeleteFounds = () => {
    setisStack("");
    deleteUserFound();
    setopenStackModal(false);
  };
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
          <section className="rounded-xl bg-white px-6 ml-auto mr-auto shadow-xl py-2">
            <div className=" flex justify-end items-center pt-2">
              <button
                type="button"
                className=" h-8 text-purple-dark bg-purple-dark-white font-semibold px-2 rounded-md flex items-center gap-1 text-[8px] "
                onClick={handleDeleteFounds}
              >
                <EraserIcon size={12} />
                <span className="small:text-[12px]">Limpar busca</span>
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
                    <h2 className="text-[12px] font-bold text-zinc-900">
                      {name}
                    </h2>
                    <h3 className="text-[9px] text-zinc-800">@{login}</h3>
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
                  <>
                    <li className="text-[12px] font-semibold w-full my-2 text-zinc-700">
                      Você pode adicionar uma <strong>Etiqueta</strong>
                    </li>
                    <SelectStackList
                      id={id}
                      addStack={addStack}
                      isStack={isStack}
                      setisStack={setisStack}
                    />
                  </>
                ) : (
                  <ul className="flex">
                    <li className="flex flex-col items-center justify-center w-[56px]">

                  <header className="flex px-2 bg-green-200 py-[6px] rounded-full justify-center gap-1">
                                          
                  <span
                          className="font-LexendFont text-[12px] font-normal text-green-800"
                        >
                          <User2 size={14} strokeWidth={3} />
                     
                        </span>

                        <span
                          className="font-LexendFont
text-[10px] font-semibold text-green-600
"
                        >
                          {followers}
                        </span>
                  </header>


                      <span className="text-[8px] text-green-800 font-semibold py-1">
                        Seguidores
                      </span>
                    </li>


                    <li className="flex flex-col items-center justify-center w-[56px]">

<header className="flex px-2 bg-red-200 py-[6px] rounded-full justify-center gap-1">
                        
<span
        className="font-LexendFont text-[12px] font-normal text-red-800"
      >
        <Archive size={14} strokeWidth={3} className="text-red-600" />
   
      </span>

      <span
        className="font-LexendFont
text-[10px] font-semibold text-red-600
"
      >
        {public_repos}
      </span>
</header>


    <span className="text-[8px] text-green-700 font-semibold py-1">
      R.Publicos
    </span>
  </li>


  <li className="flex flex-col items-center justify-center w-[56px]">

<header className="flex px-2 bg-yellow-200 py-[6px] rounded-full justify-center gap-1 text-yellow-600">
                        
<span
        className="font-LexendFont text-[12px] font-normal text-yellow-800"
      >
        <Star size={14} strokeWidth={3} className="text-yellow-600" />
   
      </span>

      <span
        className="font-LexendFont
text-[10px] font-semibold
"
      >
        {totalStart}
      </span>
</header>


    <span className="text-[8px] text-green-800 font-semibold py-1 text-center">
      Strelas
    </span>
  </li>

                  </ul>
                )}

                {openStackModal ? (
                  <button
                    type="button"
                    className={clsx(
                      " small:h-12 h-8 w-full  font-semibold rounded-md flex items-center gap-2 text-[12px] px-2 justify-center ",
                      { " text-white bg-purple-dark": isStack.length > 0 },
                      { "bg-zinc-300 text-zinc-900": isStack === "" }
                    )}
                    onClick={saveFavoriteUser}
                  >
                    <Layers size={16} />
                    <span className="small:text-[16px]">Favoritar</span>
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
