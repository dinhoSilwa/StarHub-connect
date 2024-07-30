import { BannerSection } from "./Banner/Banner";
import { Header } from "./Header";
import  FavoriteList from "./Favoritelist/FavoriteListComp";
import { SearchUser } from "./Search/SearchUser";

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
