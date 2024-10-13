import clsx from "clsx";
import { useSetName } from "../../hook/user/useSetName";
import { useUserNameStore } from "../../store/usrname";

export const ModalName = () => {
  const { handleSubmit, errors, register, watch } = useSetName();
  const {usernameLogin} = useUserNameStore()

  const username = watch("username");

  return (
    <article className="w-[90%] px-12 py-12 bg-white m-auto rounded-md shadow-xl">
      <header className="flex items-center flex-col my-4">
        <h2 className="text-[18px] font-bold font-LexendFont text-purple-800">
          Bem vindo ao Starhub {":)"}
        </h2>
        <h3 className="font-LexendFont text-gray-600 text-[14px]">
          como devemos te chamar ?
        </h3>
      </header>
      <form
        action=""
        className="flex gap-4 flex-col items-center"
        onSubmit={handleSubmit}
      >
        {errors.username && (
          <span className="text-red-600">{errors.username.message}</span>
        )}

        <fieldset className="flex relative">
          <input
            type="text"
            value={username || ""}
            className={clsx(
              "px-2 text-purple-700 font-bold font-LexendFont h-10 ring-1 focus:outline focus:ring-r-cyan-950 rounded-md",
              { "border-none ring-1 ring-red-600": errors.username?.message }
            )}
            {...register("username")}
          />
          <button
            type="submit"
            className="h-10 bg-purple-700 px-4 py-2 rounded-md text-white"
          >
            {usernameLogin ? "Editar" : "Salvar"}
          </button>
        </fieldset>

        <fieldset className="flex items-center gap-1 justify-center">
          <input type="checkbox" id="githubuser" name="check" />{" "}
          <label htmlFor="githubuser" className="text-[12px]">
            Buscar Pelo githubuser
          </label>
        </fieldset>
      </form>
    </article>
  );
};
