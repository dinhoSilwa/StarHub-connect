export type GithubersType = {

  login? : string;
  name : string ;
  loading : boolean;
  avatar_url : string ;
  followers : number
  repos_url : string 
  totalStart: number
  public_repos : number;
  bio :string 
}

export interface FavoriteProps {
  name : string;
  bio : string;
  avatar_url : string
  public_repos : number;
  followers : number;
  totalStart : number
}

export type globalDataUser = GithubersType[];

export type useProfileProps = {
  username: string
}

export interface UserRepoType {
  name : string;
  stargazers_count : number
}