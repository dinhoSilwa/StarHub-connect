import { BellIcon } from "lucide-react";

export const Header = () => {
  return (
    <>
      <header className="h-20 flex items-center justify-start gap-2 px-2">
        <figure className="bg-red-200 h-10 w-10 rounded-full overflow-hidden">
          <img src="oi" alt="" />
        </figure>
        <h2 className="font-bold text-[14px]">Olá, Dinho👋</h2>

        <section className="flex-1  flex justify-end px-4">
          <figure className="h-10 w-10 bg-zinc-100 grid place-content-center rounded-full">
            <BellIcon size={20} className="text-purple-800" />
          </figure>
        </section>
      </header>
    </>
  )
}