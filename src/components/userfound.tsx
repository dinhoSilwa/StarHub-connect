import React from "react"
import { useGitHubUsers } from "../hooks/fetchhooks"
import { useProfileProps } from "../@types/githubusers"

export const UserFound: React.FC<useProfileProps> = ({ username }) => {
  const { user, loading, error } = useGitHubUsers(username)
  if (loading) {
    return <span>Carregando...</span>
  }
  if (error) {
    return <span>Falha ao obter usuário</span>
  }
  if (!user) {
    return null
  }

  return(
<>
<span>{user.followers}{"sucesso"}</span>
<img src={user.avatar_url} alt="oi" />
{user.avatar_url}
</>
  )
}