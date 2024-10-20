import clsx from "clsx";
import { BellIcon, EllipsisVertical, SearchIcon } from "lucide-react";
import { ProfileStore } from "../store/profileStore";

export const Header = () => {
  const { dataUser, deleteDataUser } = ProfileStore();
  console.log("Tentativa de trazer", dataUser);

  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-4 mb-4">


        <div>
          <h3>bem vindo 👋</h3>
                <h2
          className={clsx(
            "font-bold text-[12px] font-LexendFont text-zinc-800 group",
            "small:text-[18px]"
          )}
        >

          {dataUser?.login} 

        </h2>

        </div>
        
  

        <section className="flex-1 flex justify-end px-4 items-center gap-4">
          <figure className="flex gap-6">
          <SearchIcon size={24} className="text-purple-800" />
          <BellIcon size={24} className="text-purple-800" />
          </figure>

        </section>
      </header>
    </>
  );
};
