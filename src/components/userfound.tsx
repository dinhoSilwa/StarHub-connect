import React from "react"
import { useGitHubUsers } from "../hooks/fetchhooks"
import { useProfileProps } from "../@types/githubusers"

export const UserFound: React.FC<useProfileProps> = ({ username }) => {
  const { user, loading, error } = useGitHubUsers(username)
  if (loading) {
    return <span>Carregando...</span>
  }
  if (error) {
    console.log(error)
    return <span>Falha ao obter usuário</span>
  }
  if (!user) {
    return <span>Não indentificado</span>
  }

    
  return(
<>
<h2>{user.name}</h2>
<img src={user.avatar_url} alt="oi" style={{width : '10%'}} />
<span>{user.followers}</span>
</>
  )
}