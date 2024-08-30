import { modalProfileStore } from "../../store/ModalControler";

export const ProfileModal = () => {
  const { isOpenModalProfile, setisOpenModalProfile } = modalProfileStore();

  return (
    <>
      {isOpenModalProfile && (
        <section className=" w-full bg-gray-600 bg-opacity-40 h-screen absolute top-0 left-0 backdrop-blur-sm ">
          <div className="bg-white w-[90%] rounded-xl ml-[5%] absolute top-[20%] flex flex-col px-4 gap-4 py-8">
            <header className="flex gap-1 items-center">
              <figure className="w-12 h-12 bg-gray-600 rounded-full"></figure>
              <article className="flex flex-col gap-0">
                <h2 className="text-[14px] font-semibold leading-none">
                  Dinho Silva
                </h2>
                <p className="text-[12px] font-medium text-gray-400">
                  @githubuser
                </p>
              </article>

              <figure onClick={setisOpenModalProfile}>Fechar</figure>
            </header>

            <form>
              <fieldset className="flex flex-col gap-1">
                <label htmlFor="input-name" className="text-[12px]">
                  Editar name/username
                </label>
                <input
                  type="text"
                  defaultValue={"Dinho silva"}
                  className="text-[14px] font-semibold border rounded-md w-44 py-1 px-1"
                />

                <label htmlFor="input-name" className="text-[12px]">
                  Editar Email
                </label>
                <input
                  type="text"
                  defaultValue={"Dinho silva"}
                  className="text-[14px] font-semibold border rounded-md w-44 py-1 px-1"
                />
              </fieldset>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
