import { BannerSection } from "./Banner";
import { Header } from "./Header";
import { UserFound } from "./userfound";
import { FavoriteList } from "./FavoriteList";
import { SearchUser } from "./SearchUser";

export const HomePage = () => {
  return (
    <>
      <main className="bg-[#f3f1f1] flex flex-col pt-4">
        <Header />
        <BannerSection />
        <SearchUser />
        <UserFound />
        <FavoriteList />
      </main>
    </>
  );
};
