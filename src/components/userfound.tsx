import React from "react"
import { useGitHubUsers } from "../hooks/fetchhooks"
import { useProfileProps } from "../@types/githubusers"
import { Star } from "lucide-react"

export const UserFound: React.FC<useProfileProps> = ({ username }) => {
  const { user, isLoading, isError, totalStart } = useGitHubUsers(username)
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
<button>
  <Star />
</button>
</ul>

</section>
</section>
</>
  )
}