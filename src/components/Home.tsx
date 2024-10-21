import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header";
import { SearchUser } from "../components/Search/SearchUser";
import { FavoriteList } from "./favoritelist";
import { ModalName } from "./Modal/modalname";
import { ContainerGlobalModal } from "./Modal/ContainerModal";
import { ProfileStore } from "../store/profileStore";

export const HomePage = () => {
  const { dataUser } = ProfileStore();
  return (
    <>
      <main className="flex flex-col pt-4">
        {!dataUser?.login && <ContainerGlobalModal children={<ModalName />} />}
        <Header />
        <BannerSection />
        {/* <SearchUser /> */}
        <FavoriteList />
      </main>
    </>
  );
};
