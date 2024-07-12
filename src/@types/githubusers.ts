export type githubersType = {
  login : string;
  name : string;
  loading : boolean;
  avatar_url : string;
  followers : number
  repos_url : string
  totalStart: number
  public_repos : number;
  bio :string
}

export type useProfileProps = {
  username: string
}

export interface UserRepoType {
  name : string;
  stargazers_count : number
}