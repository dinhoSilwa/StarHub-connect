import useSWR from "swr"
import { GithubersType, UserRepoType } from "../@types/githubusers"
import { fetchGitHubers } from "../api/githubersapi"

export const useGitHubUsers = (username: string) => {

  const url = username ? `https://api.github.com/users/${username}` : null
  const { data: userData, error : userError } = useSWR<GithubersType>(url, fetchGitHubers)
  const { data : userRepo, error : urlReposErro } = useSWR<UserRepoType[]>(userData?.repos_url, fetchGitHubers)

const useRepos = userRepo || [];
const totalStart = useRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0)


  return {
    user : userData,
    useRepos,
    totalStart,
    isLoading : !userData && !userRepo && !userError && !urlReposErro,
    isError : userError || urlReposErro

  }
}