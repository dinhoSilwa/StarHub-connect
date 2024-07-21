import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { GithubersType } from "../@types/githubusers"
interface RepositoryType {
  stargazers_count: number;
}


export const searcGithubUser = async (url: string): Promise<GithubersType> => {
  try {
    const response = await axios.get(url);
    const userResponse = response.data

    const getRepos = await getGitHubStar(userResponse.repos_url)
    const star = getRepos.reduce((acc: number, repos: RepositoryType ) => acc + repos.stargazers_count, 0)
    return {

      id: uuidv4(),
      name: userResponse.name,
      login: userResponse.login,
      bio: userResponse.bio,
      avatar_url: userResponse.avatar_url,
      followers: userResponse.followers,
      public_repos: userResponse.public_repos,
      repos_url: userResponse.repos_url,
      totalStart: star

    }

  } catch (error) {
    throw new Error("Falha na comunicação com github")
  }
}

const getGitHubStar = async (url : string) =>{
  const response = await axios.get(url);
  return response.data
}