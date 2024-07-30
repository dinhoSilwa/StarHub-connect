import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header";
import { SearchUser } from "../components/Search/SearchUser";
import { FavoriteList } from "./Favoritelist";

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
