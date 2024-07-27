import { FavoriteStorage } from "../store/Favorites";
import { extractFirstAndSecondName } from "../utils/stringutils";
import { GithubersType } from "../@types/githubusers";
import { useEffect, useState } from "react";
import { StackListRender } from "./StackList";
import { ArchiveIcon, EllipsisVertical, StarIcon,  User2 } from "lucide-react";
import { ManagerUser } from "./EditMenu";
import { NotListYet } from "./Notlistyet";

export const FavoriteList = () => {
  const { favoriteDataBase } = FavoriteStorage();
  const [currentListRender, setcurrentListRender] =
    useState<GithubersType[]>(favoriteDataBase);
  const [currentStackList, setcurrentStackList] = useState("");
  const [isOpenId, setIsOpenId] = useState<string | null>("")


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
    <section className="flex flex-col px-4 bg-zinc-100 gap-2 py-2">
      <header className="mt-2 mb-2 w-full">
        <h2
          className="text-[12px] font-bold text-purple-dark 
      font-Montserrat
      "
        >
          Lista de favoritos
        </h2>
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
              },
              index
            ) => {
              const firstAndSecondName = extractFirstAndSecondName(name);

              return (
                <>
                  <section
                    key={index}
                    className="flex bg-white rounded-md py-4 items-center justify-around px-4 h-20"
                  >
                      
                    <header className="flex w-[150px]">
                      <figure className="w-12 h-12 rounded-md overflow-hidden">
                        <img src={avatar_url} alt={id} />
                      </figure>

                      <p className=" flex flex-col pl-2 justify-center">
                        <span className="flex items-center gap-1">
                          {" "}
                          <strong className="flex text-[10px] flex-wrap leading-4 text-slate-900 font-LexendFont">
                            {firstAndSecondName}
                          </strong>
                          <span className="text-[7px] px-1 h-4 bg-purple-200 rounded-full text-purple-500 font-bold grid place-content-center">
                            {stack}
                          </span>
                        </span>
                        <span className="text-[8px] text-zinc-600 font-LexendFont">
                          @{login}
                        </span>
                      </p>
                    </header>

                    <article className="flex w-[120px] justify-center gap-3">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <ArchiveIcon
                          size={14}
                          strokeWidth={2}
                          className="text-orange-500"
                        />
                        <p className="font-semibold font-LexendFont text-[11px]">
                          {public_repos}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1">
                        <User2
                          size={14}
                          strokeWidth={2}
                          className="text-orange-500"
                        />
                        <p className="font-semibold font-LexendFont text-[11px]">
                          {followers}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1">
                        <StarIcon
                          size={14}
                          strokeWidth={2}
                          className="text-orange-500"
                        />
                        <p className="font-semibold font-LexendFont text-[11px]">
                          {totalStart}
                        </p>
                      </div>
                    </article>

                    <nav className="h-10 w-10 grid place-content-center z-50 relative hover:bg-zinc-100 rounded-full cursor-pointer"
                    onClick={()=>setIsOpenId(id)}
                    >

                      <EllipsisVertical size={20} className="text-purple-950 relative" />                    
                      
                      {
                        isOpenId == id ? <ManagerUser user={id} /> : null
                      }
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
