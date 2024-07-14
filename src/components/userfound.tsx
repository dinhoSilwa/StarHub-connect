import React from "react"
import { useGitHubUsers } from "../hooks/fetchhooks"
import { FavoriteProps, useProfileProps } from "../@types/githubusers"
import useUserGlobalData from "../store.ts/favoriteusers"
import { Archive, Star, User2 } from "lucide-react";


export const UserFound: React.FC<useProfileProps> = ({ username }) => {
  const { user, isLoading, isError, totalStart } = useGitHubUsers(username)
  const {upDateData} = useUserGlobalData()
  if (isLoading) {
    return <span>Carregando...</span>
  }
  if (isError) {
    console.log(isError)
    return <span>Falha ao obter usuário</span>
  }
  if (!user) {
    return <span>Não indentificado</span>
  }



  const saveFavorite = () =>{
    const {name, bio, avatar_url , public_repos, followers} = user
const alldata : FavoriteProps = {name, bio, avatar_url , public_repos, followers, totalStart}
upDateData(alldata)
    
  }
  return (
    <>
      <section className="flex justify-between items-center bg-purple-light w-[90%] ml-auto mr-auto py-8 px-4 rounded-lg font-Montserrat">
        <header className="flex border flex-col">
          <img
            src={user.avatar_url}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className=" flex-col gap-0">
            <h2 className="text-[14px] font-bold text-zinc-900">{user.name}</h2>
            <h3 className="text-[10px] text-zinc-800">@{user.login}</h3>
          </div>
        </header>

        <section className="w-1/2 flex flex-col items-center gap-2">
          <ul className="flex gap-4">
            <li className="w-8 flex flex-col items-center justify-center gap-2">
              <Archive className="text-yellow-icon" size={18} />{" "}
              <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                {totalStart}
              </p>
            </li>

            <li className="w-8 flex flex-col items-center justify-center gap-2">
              <Star className="text-yellow-icon" size={18} />{" "}
              <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                {user.public_repos}
              </p>
            </li>

            <li className="w-8 flex flex-col items-center justify-center gap-2">
              <User2 className="text-yellow-icon" size={18} />{" "}
              <p className="text-purple-dark font-Montserrat text-[14px] font-bold">
                {user.followers}
              </p>
            </li>
          </ul>
          <button
            className="w-full h-10 bg-purple-dark text-white font-semibold px-4 rounded-md"
            onClick={() => saveFavorite}
          >
            Adicionar
          </button>
        </section>
      </section>
    </>
  );
}