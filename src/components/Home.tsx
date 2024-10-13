import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header";
import { SearchUser } from "../components/Search/SearchUser";
import { FavoriteList } from "./favoritelist";
import { useUserNameStore } from "../store/usrname";
import { ModalName } from "./Modal/modalname";
import { ContainerGlobalModal } from "./Modal/ContainerModal";

export const HomePage = () => {
  const {usernameLogin} = useUserNameStore()

  return (
    <>
      <main className="flex flex-col pt-4">
        {!usernameLogin && <ContainerGlobalModal children={<ModalName />} />}
        <Header />
        <BannerSection />
        <SearchUser />
        <FavoriteList />
      </main>
    </>
  );
};
