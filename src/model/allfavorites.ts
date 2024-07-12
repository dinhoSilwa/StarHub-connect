export interface AllGithubersTypes {
  pfp?: string;
  name: string;
  stack: string;
  follow: number;
  repo: number;
  createTime: number;

}
export const AllGithubers: AllGithubersTypes[] = [
  {
    pfp: "https://avatars.githubusercontent.com/u/143217996?v=4",
    name: "Dinho silva",
    stack: "Frontend",
    follow: 12,
    repo: 32,
    createTime: 3
  },

]


export const recentGithubers: AllGithubersTypes[] = [
  {
    pfp: "https://avatars.githubusercontent.com/u/143217996?v=4",
    name: "Dinho silva",
    stack: "Frontend",
    follow: 12,
    repo: 32,
    createTime: 3
  },
  {
    pfp: "https://avatars.githubusercontent.com/u/143217996?v=4",
    name: "Dinho silva2",
    stack: "Frontend",
    follow: 12,
    repo: 32,
    createTime: 3
  },
  {
    pfp: "https://avatars.githubusercontent.com/u/143217996?v=4",
    name: "Dinho silva 3",
    stack: "Frontend",
    follow: 12,
    repo: 32,
    createTime: 3
  },
  {
    pfp: "https://avatars.githubusercontent.com/u/143217996?v=4",
    name: "Dinho silva 4",
    stack: "Frontend",
    follow: 12,
    repo: 32,
    createTime: 3
  },
  
]

export interface stacksListType {
  name: string;
}

export const stacksList: stacksListType[] = [

  { name: "Frontend" },
  { name: "Backend" },
  { name: "Devops" },
  { name: "Mobile" },

]