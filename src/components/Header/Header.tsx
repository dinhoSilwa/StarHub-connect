import clsx from "clsx";
import { BellIcon, SearchIcon } from "lucide-react";
import { ProfileStore } from "../../store/profileStore";

export const Header = () => {
  const { dataUser } = ProfileStore();
  console.log("Tentativa de trazer", dataUser);

  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-4 mb-4">
        <div className="font-LexendFont w-1/2">
          <h3 className={clsx('text-sm text-gray-800/90', "md:text-base")}>bem vindo 👋</h3>
          <h2
            className={clsx(
              "font-bold text-md text-zinc-800 group", "md:text-lg"
          
            )}
          >
            {dataUser?.login}
          </h2>
        </div>
        <section className="w-1/3 flex-1 flex justify-end items-center gap-4">
          <figure className="flex gap-4">
            <SearchIcon size={24} className="text-bgDark-second" />
            <BellIcon size={24} className="text-bgDark-second" />
          </figure>
        </section>
      </header>
    </>
  );
};
