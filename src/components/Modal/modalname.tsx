import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { formaterForSearch } from "../../utils/stringutils";
import { useUserNameStore } from "../../store/usrname";

export const ModalName = () => {
  interface IinputSearch {
    username?: string;
  }
  const [inputSearch, setinputSearch] = useState<IinputSearch>({});
  const { setUsername, usernameLogin } = useUserNameStore();

  const usernameSchema = Yup.object().shape({
    username: Yup.string().required("Digite o seu username"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(usernameSchema),
  });

  const handleGithubName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type } = event.target;
    const isCheck = type === "checkbox";

    setinputSearch((prevState) => {
      const formatted = isCheck
        ? formaterForSearch(prevState.username ?? "")
        : value;
      return {
        ...prevState,
        username: formatted,
      };
    });
  };

  const onSubmit = (data: any) => {
    const { username } = data;
    setUsername(username);
  };

  return (
    <>
      {!usernameLogin && (
        <section className=" top-0 fixed z-50 bg-zinc-100 h-screen w-screen">
          <article className="bg-white w-[90%] rounded-lg shadow-lg drop-shadow-xl px-4 flex flex-col items-center ml-auto mr-auto mt-20 py-8">
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
              className="flex gap-2 flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset className="flex flex-col gap-1">
                <input
                  type="text"
                  value={inputSearch.username}
                  className="px-2 text-purple-700 font-bold font-LexendFont h-10 border-2 border-cyan-950 rounded-md"
                  {...register("username", {
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                      handleGithubName(event);
                    },
                  })}
                />
                {errors.username && <span>{errors.username.message}</span>}
                <button
                  type="submit"
                  className="h-10 bg-purple-700 px-2 py-2 rounded-md text-white"
                >
                  Registra meu nome
                </button>
              </fieldset>

              <fieldset className="flex items-center gap-1 justify-center">
                <input
                  type="checkbox"
                  id="githubuser"
                  name="check"
                  value={inputSearch.username}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleGithubName(event)
                  }
                />{" "}
                <label htmlFor="githubuser" className="text-[12px]">
                  Buscar Pelo githubuser
                </label>
              </fieldset>
            </form>
          </article>
        </section>
      )}
    </>
  );
};
