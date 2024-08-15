import clsx from "clsx";
import { BellIcon, EllipsisVertical } from "lucide-react";
import { useUserNameStore } from "../store/usrname";

export const Header = () => {
  const { usernameLogin } = useUserNameStore();

  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-4 mb-4">
        <figure className="bg-zinc-200 h-10 w-10 rounded-full overflow-hidden">
          <img src="profile" alt="" />
        </figure>
        <h2
          className={clsx(
            "font-bold text-[14px] font-LexendFont text-zinc-800",
            "small:text-[18px]"
          )}
        >
          Olá, {usernameLogin} 👋
        </h2>

        <section className="flex-1 flex justify-end px-4 items-center gap-4">
          <figure className="h-10 w-10 bg-zinc-100 grid place-content-center rounded-full">
            <BellIcon size={20} className="text-purple-800" />
          </figure>

          <nav role="navegação h-10 w-10">
            <EllipsisVertical className="text-purple-dark" />
          </nav>
        </section>
      </header>
    </>
  );
};
