import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { ModalName } from "./Modal/modalname";
import { ContainerGlobalModal } from "./Modal/ContainerModal";
import { ProfileStore } from "../store/profileStore";
import { NavigationStack } from "./Navegations/EditMenu";
import { GithubersList, GithubersProps } from "./Githubers/Lista/githubersList";
import { ContainerList } from "./Githubers/containerList/container";

export const GithubersDetails: GithubersProps[] = [
  {
    avatar: "https://avatars.githubusercontent.com/u/422248?v=4",
    username: "Osvaldo cruz",
    nickname: "osvaldinho",
    stack: "Frontend",
    stackIcon : "⭐"
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/022248?v=4",
    username: "Kakai Tamar",
    nickname: "kakaitata",
    stack: "Backend",
    stackIcon : "🤖"
  },
];

export const HomePage = () => {
  const { dataUser } = ProfileStore();
  return (
    <>
      <main className="flex flex-col pt-4 dark:bg-bgDark-primary">
        {!dataUser?.login && <ContainerGlobalModal children={<ModalName />} />}
        <Header />
        <BannerSection />
        <NavigationStack />
        <ContainerList />
 
      </main>
    </>
  );
};
