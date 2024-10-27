import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { GlobalModalContainer } from "./Modal/ContainerModal";
import { EditMenuNavigationStack } from "./Navegations/EditMenu";
import { GithubersProps } from "./Githubers/Lista/githubersList";
import { GithubersListContainer } from "./Githubers/containerList/container";
import { SearchUsername } from "./Search/searchBar";
import { SerachUsernameStore } from "../store/searchResults";

export const githubersDetailsList: GithubersProps[] = [
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
  const { isSearchActive } = SerachUsernameStore();
  return (
    <>
      <main className="flex flex-col pt-4 dark:bg-bgDark-primary">
        <Header />
        <BannerSection />
        <EditMenuNavigationStack />
        <GithubersListContainer />
        {isSearchActive && (
          <GlobalModalContainer
            children={<SearchUsername isUserProfile={false} />}
          />
        )}
      </main>
    </>
  );
};
