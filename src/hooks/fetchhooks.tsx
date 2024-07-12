import useSWR from "swr"
import { githubersType } from "../@types/githubusers"
import { fetchGitHubers } from "../api/githubersapi"

export const useGitHubUsers = (username: string) => {

  const { data, error } = useSWR<githubersType>(username ? `https://api.github.com/users/${username}` : null, fetchGitHubers)
  return {
    user: data,
    loading: !error && !data,
    error,

  }
}