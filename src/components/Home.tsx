import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { ContainerGlobalModal } from "./Modal/ContainerModal";
import { NavigationStack } from "./Navegations/EditMenu";
import {  GithubersProps } from "./Githubers/Lista/githubersList";
import { ContainerList } from "./Githubers/containerList/container";
import { SearchUserBar } from "./Search/searchBar";
import { SerachUsername } from "../store/searchResults";

export const GithubersDetails: GithubersProps[] = [
  {
    avatar: "https://avatars.githubusercontent.com/u/422248?v=4",
    username: "Osvaldo cruz",
    nickname: "osvaldinho",
    stack: "Frontend",
    stackIcon: "⭐",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/022248?v=4",
    username: "Kakai Tamar",
    nickname: "kakaitata",
    stack: "Backend",
    stackIcon: "🤖",
  },
];

export const HomePage = () => {
  const { isActiveSearch} = SerachUsername();
  return (
    <>
      <main className="flex flex-col pt-4 dark:bg-bgDark-primary">
        <Header />
        <BannerSection />
        <NavigationStack />
        <ContainerList />
        {isActiveSearch && <ContainerGlobalModal children={<SearchUserBar isUserProfile={false} />} />}
      </main>
    </>
  );
};
