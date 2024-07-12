import useSWR from "swr"
import { githubersType } from "../@types/githubusers"
import { fetchGitHubers } from "../api/githubersapi"

export const useGitHubUsers = (username: string) => {

  const url = username ? `https://api.github.com/users/${username}` : null

  const { data, error } = useSWR<githubersType>(url, fetchGitHubers)
  return {
    user: data,
    loading: !error && !data,
    error,

  }
}