import React, { useEffect, useState } from "react";
import { SearchUsernameStore } from "../../../store/searchResults";
import { AlertCircle, Archive, Stars } from "lucide-react";
import axios from "axios";
import { StarsGithubers } from "./start";

export const GithuberFound = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;
  const { userFound } = SearchUsernameStore();
  const [animationHeight, setanimationHeight] = useState("h-10");

  const getStarts = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    setanimationHeight("h-[350px]");
  }, [isOpen]);
  return (
    <section
      className={`${animationHeight} transform transition-all duration-1000`}
    >
      {userFound?.map(
        (
          { login, name, avatar_url, bio, followers, public_repos, repos_url },
          index
        ) => (
          <div key={index} className="flex flex-col items-center gap-2 ">
            <figure className="rounded-full w-20 h-20 overflow-hidden">
              <img
                src={avatar_url || ""}
                alt={name || "avatar img"}
                className="w-full"
              />
            </figure>

            <div className="flex flex-col items-center w-[90%] text-center  gap-2">
              <h2 className="font-md font-bold font-sans">@{login}</h2>
              <h3 className="px-2 p-2 bg-gray-100 rounded-lg text-[12px] flex justify-center items-center">
                {" "}
                {!bio ? <i>Este usuário ainda não escreveu uma bio.</i> : bio}
              </h3>
            </div>


            <section className=" w-full px-4 flex flex-col  items-start">
            <StarsGithubers url={repos_url} />

              <div className="flex items-center gap-2 w-full rounded-lg py-2 px-2">
                <div className=" flex -space-x-2 items-center">
                  <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
                    <Archive />{" "}
                  </span>
                  <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
                    {public_repos}
                  </span>
                </div>
                <p className="text-Dark-second font-semibold text-sm">
                  Repositorios Publicos 
                </p>
              </div>


              <div className="flex items-center gap-2 w-full rounded-lg py-2 px-2">
                <div className=" flex -space-x-2 items-center">
                  <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
                    <Archive />{" "}
                  </span>
                  <span className=" w-12 h-12 border rounded-full flex items-center justify-center bg-Dark-second/20 text-Dark-second">
                    {followers}
                  </span>
                </div>
                <p className="text-Dark-second font-semibold text-sm">Seguidores</p>
              </div>
            </section>
          </div>
        )
      )}
    </section>
  );
};
