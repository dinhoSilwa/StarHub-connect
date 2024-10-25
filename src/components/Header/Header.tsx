import clsx from "clsx";
import {
  BellIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  SunMoon,
  SunMoonIcon,
} from "lucide-react";
import { ProfileStore } from "../../store/profileStore";
import { useToggleTheme } from "../../store/ThemeStore/themeStore";

export const Header = () => {
  const { dataUser } = ProfileStore();
  const { setTheme, theme } = useToggleTheme();

  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-4 mb-4 ">
        <div className="font-LexendFont w-1/2 ">
          <h3
            className={clsx(
              "text-sm text-gray-800/90 dark:text-white",
              "md:text-base"
            )}
          >
            bem vindo 👋
          </h3>
          <h2
            className={clsx(
              "font-bold text-md text-zinc-800 group dark:text-white",
              "md:text-lg"
            )}
          >
            {dataUser?.login}
          </h2>
        </div>
        <section className="w-1/3 flex-1 flex justify-end items-center gap-4">
          <figure className="flex gap-4 items-center">
            <SearchIcon size={24} className="text-bgDark-second" />
            <BellIcon size={24} className="text-bgDark-second" />
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
        </section>
      </header>
    </>
  );
};
