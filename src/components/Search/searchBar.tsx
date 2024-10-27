import React from "react";
import { useGithub } from "../../hook/githubuser/getGithubUser";
import { SerachUsername } from "../../store/searchResults";
import { GithuberFound } from "../Githubers/Found/userFound";

export const SearchUserBar = ({isUserProfile} : {isUserProfile : boolean} ) => {
  const { term, setIsActiveSearchModal } = SerachUsername();
  const {
    handleSubmit,
    watch,
    register,
    reset,
    errors,
    isSuccess,
    isLoading,
    setValue,
  } = useGithub({
    isUserProfile
  });

  const userName = watch("username");

  return (

    <section className="flex flex-col gap-2">
          <form
      className="bg-white w-1/2 h-1/2  flex flex-col justify-center p-4 rounded-md"
      onSubmit={handleSubmit}
    >
      <legend>Hora de encontrar aquele(a) GitHuber talentoso(a)! Digite o usuário e vamos ver o que ele(a) anda codando por aí</legend>
      <input
        type="text"
        placeholder="buscar"
        value={userName || ''}
        {...register("username", {
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(
              "username",
              e.target.value.replace(/\s+/g, "").toLowerCase()
            );
          },
        })}
      />
      {errors.username && (
        <span className="text-red-500 text-md">{errors.username.message}</span>
      )}
      <button
        type="submit"
        disabled={isLoading ? true : false}
        className="btn p-2 bg-red-600 text-white"
      >
        {isLoading ? <span>Procurarando...</span> : <span>Procurar</span>}
      </button>
      <button type="button" onClick={() => reset()}>
        Limpar
      </button>
      {term}
      <span onClick={setIsActiveSearchModal}>Fechar</span>
      <span>{isSuccess ? "Encontrado" : null}</span>
    </form>
    <GithuberFound isOpen={isSuccess}/>

    </section>
    
  );
};
