import { Archive, EraserIcon, Loader, Star, Trash2Icon, User2 } from "lucide-react"
import { foundUserStore } from "../store/githubfound"
import { FavoriteStorage } from "../store/Favorites"
import { GithubersType } from "../@types/githubusers"


export const UserFound = () => {
  const { isloading, erroFound, userFound, deleteUserFound } = foundUserStore()
  const { saveFavorites } = FavoriteStorage()

  if (isloading) return (<main className="flex gap-2"><Loader className="animate animate-spin" /> Buscando no Github ...</main>)
  if (erroFound) return (<div>Não Encontrado</div>)

  const handleSaveFavorites = () => {
    const githubTosave: { [key: string]: GithubersType } = userFound.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as { [key: string]: GithubersType });

    Object.values(githubTosave).forEach(githuber => saveFavorites(githuber));
  };


  return (
    <>


      {
        userFound.map(({ avatar_url, name, login, public_repos, followers, totalStart }, index) => (
          <section className="rounded-lg bg-white px-6 w-[90%] ml-auto mr-auto">
            <div className=" flex justify-end items-center pt-2">

              <button
                type="button"
                className=" h-8 text-purple-dark bg-purple-dark-white font-semibold px-2 rounded-md flex items-center gap-1 text-[8px] "
                onClick={deleteUserFound}
              >
                <EraserIcon size={12} /> Limpar busca
              </button>
            </div>

            <section key={index} className="flex justify-between items-center ml-auto mr-auto py-8 rounded-lg font-Montserrat shadow-sm border-zinc-200">

              <header className="flex flex-col gap-2">
                <img
                  src={avatar_url}
                  alt=""
                  className="w-16 h-16 rounded-md"
                />
                <div className=" flex-col">
                  <h2 className="text-[14px] font-bold text-zinc-900">{name}</h2>
                  <h3 className="text-[10px] text-zinc-800">@{login}</h3>
                </div>
              </header>

              <section className="w-1/2 flex flex-col items-center gap-2">
                <ul className="flex gap-4">
                  <li className="w-8 flex flex-col items-center justify-center gap-2"
                  title="Quantidade de Repositorios públicos"
                  >
                    <Archive className="text-yellow-icon" size={18} />{" "}
                    <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                      {public_repos}
                    </p>
                  </li>

                  <li className="w-8 flex flex-col items-center justify-center gap-2"
    title="Total de Estrelas Recebidas"

                  >
                    <Star className="text-yellow-icon" size={18} />{" "}
                    <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                      {totalStart}
                    </p>
                  </li>

                  <li className="w-8 flex flex-col items-center justify-center gap-2"
                  title="Total de Seguidores"
                  >
                    <User2 className="text-yellow-icon" size={18} />{" "}
                    <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                      {followers}
                    </p>
                  </li>
                </ul>

                <button
                  type="button"
                  className=" h-8 w-full bg-purple-dark text-white font-semibold rounded-md flex items-center gap-1 text-[12px] px-2 justify-center"
                  onClick={handleSaveFavorites}
                >
                  <Star size={16} /> Favoritar
                </button>





              </section>
            </section>
          </section>
        ))
      }

    </>
  )


}