import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { GlobalModalContainer } from "./Modal/ContainerModal";
import { EditMenuNavigationStack } from "./Navegations/EditMenu";
import { GithubersProps } from "./Githubers/Lista/githubersList";
import { GithubersListContainer } from "./Githubers/containerList/container";
import { SearchUsername } from "./Search/searchBar";
import { SearchUsernameStore } from "../store/searchResults";
import { userProfileGithubName } from "../store/profileName";

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
  const { isSearchActive } = SearchUsernameStore();
  const { AuthProfile } = userProfileGithubName();
  const isLoggedIn =
    AuthProfile && AuthProfile.length > 0 && AuthProfile[0].login;
  return (
    <>
      <main className=" flex flex-col pt-4 dark:bg-Dark-primary">
        {!isLoggedIn && (
          <GlobalModalContainer
            children={<SearchUsername isUserProfile={!isLoggedIn && true} />}
          />
        )}
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
