import type { AxiosInstance } from "axios";
import type { GithubResponseInterface } from "../../@types/githubusers";



export const getGithubUser = async (api: AxiosInstance, username: string):Promise<GithubResponseInterface> => {
  const response = await api.get(`/users/${username}`);
  const data = response.data;

  return{
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    followers: data.followers,
    repos_url: data.repos_url,
    public_repos: data.public_repos,
    bio: data.bio
  }
};
