import bannerIcons from "../assets/banner/banner_01.png"

export const BannerSection = () => {
  return (
    <>
      <section className="flex justify-center items-center rounded-xl banner-gradiente h-[132px] w-[90%] ml-auto mr-auto px-6">
        <header className="flex flex-col font-LexendFont  w-[150px] mr-6">
        <h3 className="font-light text-[12px] text-banner-title">Conecte-se aos seus</h3> 
        <h2 className="font-bold leading-[16px] text-banner-title"> Desenvolvedores Favoritos</h2>
        </header>
       <img src={bannerIcons} alt="" className="w-[100px]" />
      </section>
    </>
  );
};
