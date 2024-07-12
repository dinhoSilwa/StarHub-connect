import React from "react"
import { useGitHubUsers } from "../hooks/fetchhooks"
import { FavoriteProps, useProfileProps } from "../@types/githubusers"
import { Star } from "lucide-react"
import useUserGlobalData from "../store.ts/favoriteusers"

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
  return(
<>
<section>
<figure>
<img src={user.avatar_url} alt={`${user.name}`} style={{width : "10%"}}/>

  </figure>
<section>
<h2>{"Nome:"}{user.name}</h2>
<ul>
<li>{"Total de estrela : "}{totalStart}</li>
<li>{"Total de seguidores: "}{user.followers}</li>
<li>{"Total de Repositorios Publicos"}{user.public_repos}</li>
<p>{"Bio : "}{user.bio}</p>
<button onClick={saveFavorite}>
  <Star />
</button>
</ul>

</section>
</section>
</>
  )
}