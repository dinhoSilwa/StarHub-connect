import { FavoriteStorage } from "../store/Favorites";
import { extractFirstAndSecondName } from "../utils/stringutils";
import { GithubersType } from "../@types/githubusers";
import { useEffect, useState } from "react";
import { StackListRender } from "./StackList";
import { Archive, EllipsisVertical, Layers3, Star, User2 } from "lucide-react";
import { ManagerUser } from "./EditMenu";
import { NotListYet } from "./Notlistyet";

export const FavoriteList = () => {
  const { favoriteDataBase } = FavoriteStorage();
  const [currentListRender, setcurrentListRender] =
    useState<GithubersType[]>(favoriteDataBase);
  const [currentStackList, setcurrentStackList] = useState("");
  const [isOpenId, setIsOpenId] = useState<string | null>("");

  useEffect(() => {
    setcurrentListRender(favoriteDataBase);
    setcurrentStackList("Todas");
  }, [favoriteDataBase]);

  const handleStack = (stackListName: string) => {
    if (stackListName === "Todas") {
      setcurrentStackList(stackListName);
      setcurrentListRender(favoriteDataBase);
      return;
    }
    const filterByStack = favoriteDataBase.filter((item) => {
      return item.stack === stackListName.toLocaleLowerCase();
    });

    if (filterByStack.length > 0) {
      console.log(`tem ${stackListName}`);
    } else {
      console.log(`não tem ${stackListName}`);
    }

    setcurrentListRender(filterByStack);
    setcurrentStackList(stackListName);
  };

  return (
    <section className="flex flex-col px-4 bg-zinc-200 gap-2 py-2">
      <header className="mt-2 mb-2 w-full">
        <StackListRender
          handleStack={handleStack}
          currentStackList={currentStackList}
          menuList={true}
        />
      </header>

      <section className="flex flex-col gap-4">
        {currentListRender?.length > 0 ? (
          currentListRender?.map(
            (
              {
                login,
                avatar_url,
                name,
                id,
                totalStart,
                public_repos,
                followers,
                stack,
                createdAt
                // bio
              },
              index
            ) => {
              const firstAndSecondName = extractFirstAndSecondName(name);

              return (
                <>
                  <section
                    key={index}
                    className="flex bg-white rounded-md py-6 items-start justify-around px-4 "
                  >
                    <section className="flex flex-col gap-4">
                      <header className="flex items-start gap-2">
                        <figure className="w-12 h-12 small:w-12 small:h-12 rounded-md ">
                          <img
                            src={avatar_url}
                            alt={id}
                            className="rounded-md"
                          />
                        </figure>

                        <section className=" flex flex-col pl-2 justify-center">
                          <span className="flex items-start gap-1">
                            {" "}
                            <strong className="flex text-[10px] flex-wrap leading-4 text-slate-900 font-LexendFont small:text-[12px]">
                              {firstAndSecondName === "" ? login : firstAndSecondName }
                            </strong>
                          </span>
                          <span className="text-[8px] text-zinc-600 font-LexendFont">
                            @{login?.toLocaleLowerCase()}
                          </span>

                         <span className="hidden">
                         {createdAt?.toLocaleString()}
                         </span>

                          {/* <p className="flex text-[8px] mt-4 absolute px-2 bg-white shadow-md w-[240px] py-4 rounded-md">
                            {bio}
                          </p> */}
                        </section>
                      </header>

                      <ul className="flex gap-2">

                        <li className="flex px-2 bg-orange-100 py-1 rounded-full gap-[6px] items-start">
                          <span
                            className="font-LexendFont
    text-[12px] font-normal text-orange-800"
                          >
                            <User2 size={14} />
                          </span>

                          

                          <span
                            className="font-LexendFont
    text-[10px] font-semibold
    "
                          >
                            {followers}
                          </span>
                        </li>

                        <li className="flex px-3 bg-green-100 py-1 rounded-full gap-[6px] items-start">
                          <span
                            className="font-LexendFont
    text-[12px] font-normal text-green-800
    "
                          >
                            <Archive size={14} />
                          </span>

                          <span
                            className="font-LexendFont
    text-[10px] font-semibold
    "
                          >
                            {public_repos}
                          </span>
                        </li>

                        <li className="flex px-3 bg-orange-100 py-1 rounded-full gap-[6px] items-start">
                          <span
                            className="font-LexendFont
    text-[12px] font-normal text-orange-800
    "
                          >
                            <Star size={14} />
                          </span>

                          <span
                            className="font-LexendFont
    text-[10px] font-semibold
    "
                          >
                            {totalStart}
                          </span>
                        </li>

                        <li className="flex px-3 bg-purple-100 py-1 rounded-full gap-[6px] items-end">
                          <span
                            className="font-LexendFont
    text-[12px] font-normal text-purple-800
    "
                          >
                            <Layers3 size={14} />
                          </span>

                          <span
                            className="font-LexendFont
    text-[10px] font-semibold
    "
                          >
                            {stack}
                          </span>
                        </li>
                      </ul>
                    </section>

                    <nav
                      className="h-10 w-10 grid place-content-center z-50 relative hover:bg-zinc-100 rounded-full cursor-pointer"
                      onClick={() => setIsOpenId(id)}
                    >
                      <EllipsisVertical
                        size={20}
                        className="text-purple-950 relative"
                      />

                      {isOpenId == id ? <ManagerUser user={id} /> : null}
                    </nav>
                  </section>
                </>
              );
            }
          )
        ) : (
          <NotListYet stack={currentStackList} />
        )}
      </section>
    </section>
  );
};
