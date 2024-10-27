export interface GithubersType {
  id: string;
  login?: string;
  name: string;
  avatar_url: string;
  followers: number;
  repos_url: string;
  totalStart: number;
  public_repos: number;
  bio: string;
  stack?:
    | "backend"
    | "frontend"
    | "fullstack"
    | "mobile"
    | "devops"
    | "data science"
    | "machine learning"
    | "AI"
    | "security"
    | "game development"
    | "AR/VR"
    | "blockchain"
    | "cloud";

  createdAt?: Date | number;
}

export interface GithubUserResponse {
  login?: string;
  name: string;
  avatar_url: string;
  followers: number;
  repos_url: string;
  public_repos: number;
  bio: string;
}

export interface GithubErrorResponse {
  message: string;
  documentation_url: string;
  status: any;
}
