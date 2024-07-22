import banner from '../assets/banner/banner01.png';
export const BannerSection = () => {
  return (
    <>
      <section className="flex justify-around items-center rounded-md px-2">
        <figure>
          <img src={banner} alt="oi" className="w-full" />
        </figure>
      </section>
    </>
  );
};
