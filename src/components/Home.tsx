import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { ModalName } from "./Modal/modalname";
import { ContainerGlobalModal } from "./Modal/ContainerModal";
import { ProfileStore } from "../store/profileStore";
import { NavigationStack } from "./Navegations/EditMenu";
import { GithubersList, GithubersProps } from "./Githubers/Lista/githubersList";

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
        <ul className=" w-[345px] py-4 ml-auto mr-auto flex flex-col gap-2 items-center">
          {GithubersDetails?.map(({avatar,  username, nickname, stack , stackIcon}) => (
            <li className=" w-full">
              <GithubersList
              avatar={avatar}
                username={username}
                nickname={nickname}
                stackIcon={stackIcon}
                stack={stack}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
