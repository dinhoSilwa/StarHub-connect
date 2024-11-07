import React from "react";
import { useFindGithubers } from "../../hook/githubuser/getGithubUser";
import { GithuberFound } from "../Githubers/Found/userFound";
import { userProfileGithubName } from "../../store/profileName";
import {Loader, X } from "lucide-react";
import { SearchUsernameStore } from "../../store/searchResults";

export const SearchUsername = ({
  isUserProfile,
}: {
  isUserProfile: boolean;
}) => {
  const { setIsActiveSearchModal } = SearchUsernameStore();

  const {
    handleSubmit,
    watch,
    register,
    reset,
    errors,
    isSuccess,
    isLoading,
    setValue,
    isError,
  } = useFindGithubers({
    isUserProfile,
  });

  const { AuthProfile } = userProfileGithubName();
  const isLoggedIn =
    AuthProfile && AuthProfile.length > 0 && AuthProfile[0].login;

  const userName = watch("username");

  const handleContent = () => {
    reset();
    setIsActiveSearchModal();
  };

  return (
    <section>
      <form
        className="bg-white max-w-[360px] px-4 py-4 rounded-lg font-sans flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="h-8 flex justify-end py-2 w-full" title="Fechar">
          <X onClick={handleContent} />
        </div>
        <h1
          className={`text-center font-source-code font-bold text-Dark-second ${isSuccess && "hidden"}`}
        >
          {!isLoggedIn
            ? "adicione o seu username"
            : `Hora de encontrar aquele(a) GitHuber talentoso(a)!`}
        </h1>
        <div className="w-full px-8 border-b-2 mx-8 mb-4"></div>

        <fieldset className={`"relative" ${isSuccess ? "hidden" : "flex"}`}>
          <input
            type="text"
            placeholder={errors.username ? errors.username.message : "Username"}
            value={userName || ""}
            className={`min-w-[320px] h-16 pl-4 outline-none rounded-md text-[20px] font-semibold ${errors.username ? "ring-2 ring-red-500 placeholder:text-red-300" : "ring-2"}`}
            {...register("username", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(
                  "username",
                  e.target.value.replace(/\s+/g, "").toLowerCase()
                );
              },
            })}
          />
        </fieldset>
        {isError && (
          <span className="text-sm text-center text-red-600">
            {isError.message === "Request failed with status code 403"
              ? "Você atingiu o limite de requisições da API do Github para o seu endereço de IP"
              : "Falha Na Api do Github"}
          </span>
        )}
        <GithuberFound isOpen={isSuccess} />

        <fieldset className="flex w-full py-2 z-50">
          <button
            type="submit"
            disabled={isLoading ? true : false}
            className="h-16 p-2 flex justify-center items-center flex-1 bg-Dark-second rounded-md text-white text-lg font-bold font-source-code"
          >
            {isLoading ? (
              <span className="flex justify-center items-center gap-2">
                <span>
                  <Loader />
                </span>{" "}
                Procurarando...
              </span>
            ) : (
              <span>Procurar </span>
            )}
          </button>
        </fieldset>
      </form>
    </section>
  );
};
