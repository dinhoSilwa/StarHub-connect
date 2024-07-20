import { Archive, Loader, Star, User2 } from "lucide-react"
import { foundUserStore } from "../store/githubfound"


export const UserFound = () => {
  const { isloading, erroFound, userFound, deleteUserFound } = foundUserStore()

  if (isloading) return (<div className="animate animate-spin"><Loader /></div>)
  if (erroFound) return (<div>Não Encontrado</div>)

  return (
    <>
      {
        userFound.map(({ avatar_url, name, login, public_repos, followers, totalStart }, index) => (
          <section key={index} className="flex justify-between items-center bg-purple-light w-[90%] ml-auto mr-auto py-8 px-4 rounded-lg font-Montserrat">
            <header className="flex border flex-col">
              <img
                src={avatar_url}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className=" flex-col gap-0">
                <h2 className="text-[14px] font-bold text-zinc-900">{name}</h2>
                <h3 className="text-[10px] text-zinc-800">@{login}</h3>
              </div>
            </header>

            <section className="w-1/2 flex flex-col items-center gap-2">
              <ul className="flex gap-4">
                <li className="w-8 flex flex-col items-center justify-center gap-2">
                  <Archive className="text-yellow-icon" size={18} />{" "}
                  <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                    {public_repos}
                  </p>
                </li>

                <li className="w-8 flex flex-col items-center justify-center gap-2">
                  <Star className="text-yellow-icon" size={18} />{" "}
                  <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                    {totalStart}
                  </p>
                </li>

                <li className="w-8 flex flex-col items-center justify-center gap-2">
                  <User2 className="text-yellow-icon" size={18} />{" "}
                  <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                    {followers}
                  </p>
                </li>
              </ul>
              <div className="flex gap-2 w-full">
                <button
                  className=" h-10 text-purple-dark border-2 border-purple-dark font-semibold px-4 rounded-md"
                  onClick={deleteUserFound}
                >
                  Remover
                </button>
                <button
                  className=" h-10 bg-purple-dark text-white font-semibold px-4 rounded-md"

                >
                  Adicionar
                </button>
              </div>

            </section>
          </section>
        ))
      }
    </>
  )


}