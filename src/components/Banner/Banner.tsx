import clsx from "clsx";
export const BannerSection = () => {
  return (
    <>
      <section
        className={clsx(
          "relative flex flex-col gap-0 justify-center rounded-xl bg-blue-800 h-40 w-[92%] ml-auto mr-auto px-4 mb-4"
        )}
      >
        <p className="w-16 py-1 mb-2 flex justify-center gap-1 text-[12px] font-light bg-white text-black rounded-xl">
          ⭐ Github
        </p>
        <div className={clsx("w-1/2 font-LexendFont font-bold flex flex-col gap-0 text-md text-white", 
          "md:flex-row md:flex-wrap md:gap-2 md:text-lg")}>
          <p>Conecte-se</p>
          <p>Aos Seus Devs</p>
          <p>Favoritos</p>
        </div>
        <img
          src={"https://i.imgur.com/kLLNXdU.png"}
          className="w-40 top-2 absolute right-0 drop-shadow-md -scale-x-100"
        />
      </section>
    </>
  );
};
