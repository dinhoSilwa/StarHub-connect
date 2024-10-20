import clsx from "clsx";
export const BannerSection = () => {
  return (
    <>
      <section
        className={clsx(
          "relative flex flex-col gap-0 rounded-xl bg-blue-800 h-[132px] w-[92%] ml-auto mr-auto px-4 mb-4",
          "small:justify-center small:px-4 small:h-[182px]"
        )}
      >
        <p className="w-20 px-2 mb-2 flex justify-start gap-2 text-[14px] font-light bg-white text-black rounded-xl">
          ⭐ Github
        </p>
        <div className="font-LexendFont font-bold flex flex-col gap-0 text-lg text-white">
          <p>Conect-se</p>
          <p>Aos Seus Devs</p>
          <p>Favoritos</p>
        </div>
        <img
          src={"https://i.imgur.com/kLLNXdU.png"}
          
          className="w-52 -top-[20px] absolute right-0 drop-shadow-md -scale-x-100"
        />
      </section>
    </>
  );
};
