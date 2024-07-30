import clsx from "clsx";
import bannerIcon from '../../assets/banner/banner_01.png'
export const BannerSection = () => {
  return (
    <>
      <section
        className={clsx(
          "flex justify-center items-center rounded-xl banner-gradiente h-[132px] w-[95%] ml-auto mr-auto px-4 mb-4",
          "small:justify-between small:px-4 small:h-[182px]"
        )}
      >
        <header className="flex flex-col font-LexendFont w-[150px] mr-6">
          <h3 className={clsx("font-light text-[12px] text-banner-title", "small:text-[14px]")}>
            Conecte-se aos seus
          </h3>
          <h2 className={clsx("font-bold leading-[16px] text-banner-title", "small:leading-6  small:text-[20px]")}>
            {" "}
            Desenvolvedores Favoritos
          </h2>
        </header>
        <img src={bannerIcon} alt="" className={clsx("w-[100px]", "small:w-[140px] ")} />
      </section>
    </>
  );
};
