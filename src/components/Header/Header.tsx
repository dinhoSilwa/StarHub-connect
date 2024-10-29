import clsx from "clsx";
import { LucideUser, MoonIcon, SearchIcon, SunMoonIcon } from "lucide-react";
import { useToggleTheme } from "../../store/ThemeStore/themeStore";
import { userProfileGithubName } from "../../store/profileName";
import { SearchUsernameStore } from "../../store/searchResults";
import { ProfileNavigation } from "./nav/navProfile";
import { useModalStore } from "../../store/modalStoreManager";
import { GlobalModalContainer } from "../Modal/ContainerModal";

export const Header = () => {
  const { setTheme, theme } = useToggleTheme();
  const { AuthProfile } = userProfileGithubName();
  const { setIsActiveSearchModal } = SearchUsernameStore();
  const { toggleModal, modalVisibilityMap: modals } = useModalStore();

  return (
    <>
      <header className="h-20 w-screen flex items-center justify-start gap-2 px-4 mb-4 ">
        <div className="font-LexendFont w-1/2 ">
          <h3
            className={clsx(
              "text-sm text-gray-800/90 dark:text-white",
              "md:text-base"
            )}
          >
            bem vindo 👋
          </h3>
          {AuthProfile?.map(({ login }, index) => (
            <h2
              key={index}
              className={clsx(
                "font-bold text-md text-zinc-800 group dark:text-white",
                "md:text-lg"
              )}
            >
              {login}
            </h2>
          ))}
        </div>
        <nav className="w-1/3 flex-1 flex justify-end items-center gap-4">
          <figure className="flex gap-4 items-center">
            <SearchIcon
              size={24}
              className="text-bgDark-second"
              onClick={setIsActiveSearchModal}
            />
            <LucideUser
              size={24}
              className="text-bgDark-second cursor-pointer"
              onClick={() => toggleModal("modalProfile")}
            />
            {theme ? (
              <MoonIcon
                size={24}
                className="text-bgDark-second cursor-pointer active:scale-110"
                onClick={setTheme}
              />
            ) : (
              <SunMoonIcon
                size={24}
                className={`text-bgDark-second cursor-pointer transition-all duration-1000 active:scale-125`}
                onClick={setTheme}
              />
            )}
          </figure>
        </nav>
        {modals.modalProfile && (
          <GlobalModalContainer children={<ProfileNavigation />} />
        )}
      </header>
    </>
  );
};
