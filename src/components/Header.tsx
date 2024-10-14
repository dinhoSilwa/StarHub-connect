import clsx from "clsx";
import { BellIcon, EllipsisVertical } from "lucide-react";
import { modalProfileStore } from "../store/ModalControler";
import { ProfileStore } from "../store/profileStore";

export const Header = () => {
  const { setisOpenModalProfile } = modalProfileStore();
  const { dataUser, deleteDataUser } = ProfileStore();
  console.log("Tentativa de trazer", dataUser);

  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-4 mb-4">
        <figure
          className="bg-zinc-200 h-10 w-10 rounded-full overflow-hidden"
          onClick={setisOpenModalProfile}
        >
          <img src={dataUser?.avatar_url} alt="" />
        </figure>
        <h2
          className={clsx(
            "font-bold text-[14px] font-LexendFont text-zinc-800 group",
            "small:text-[18px]"
          )}
        >
          Olá, {dataUser?.login} 👋
          <button className="invisible group-hover:visible text-sm font-normal" onClick={deleteDataUser}>
            Logout
          </button>
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
