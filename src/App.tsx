import "./App.css";
import { BannerSection } from "./components/Banner";
import { FavoriteList } from "./components/FavoriteList";
import { Header } from "./components/Header";
import { Search } from "./components/SearchUser";
import { UserFound } from "./components/userfound";
function App() {
  return (
    <>
      <main className="bg-[#f3f1f1]">
        <Header />
        <BannerSection />
        <Search />
        <UserFound />
        <FavoriteList />
      </main>
    </>
  );
}

export default App;
