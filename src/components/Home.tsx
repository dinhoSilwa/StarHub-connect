import { BannerSection } from "./Banner";
import { Header } from "./Header";
import { FavoriteList } from "./FavoriteList";
import { SearchUser } from "./SearchUser";

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
