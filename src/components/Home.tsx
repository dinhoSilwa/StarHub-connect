import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header";
import  FavoriteList from "../components/Favoritelist/FavoriteListComp";
import { SearchUser } from "../components/Search/SearchUser";

export const HomePage = () => {
  return (
    <>
      <main className="flex flex-col pt-4">
        <Header />
        <BannerSection />
        <SearchUser />
        <FavoriteList />
        
        
      </main>
    </>
  );
};
