import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header";
import { SearchUser } from "../components/Search/SearchUser";
import { FavoriteList } from "./favoritelist";
import { ModalName } from "./Modal/modalname";

export const HomePage = () => {
  return (
    <>
      <main className="flex flex-col pt-4">
        <ModalName />
        <Header />
        <BannerSection />
        <SearchUser />
        <FavoriteList />
      </main>
    </>
  );
};
