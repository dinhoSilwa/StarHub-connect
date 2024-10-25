import { BannerSection } from "../components/Banner/Banner";
import { Header } from "./Header/Header";
import { ModalName } from "./Modal/modalname";
import { ContainerGlobalModal } from "./Modal/ContainerModal";
import { ProfileStore } from "../store/profileStore";
import { NavigationStack } from "./Navegations/EditMenu";
import { ChevronLeft, ChevronRight, CircleChevronLeft } from "lucide-react";
import { useUserNameStore } from "../store/usrname";

export const HomePage = () => {
  const { dataUser } = ProfileStore();
  const {usernameLogin} = useUserNameStore()
  return (
    <>
      <main className="flex flex-col pt-4 dark:bg-bgDark-primary">
        {!dataUser?.login && <ContainerGlobalModal children={<ModalName />} />}
        <Header />
        <BannerSection />
        <NavigationStack />
        {usernameLogin}

      </main>
    </>
  );
};
