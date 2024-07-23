import { ArchiveIcon, StarIcon, User2 } from "lucide-react";
import { FavoriteStorage } from "../store/Favorites";
import { stacksList } from "../model/allfavorites";
import { extractFirstAndSecondName } from "../utils/stringutils";
import { GithubersType } from "../@types/githubusers";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const FavoriteList = () => {
  const { favoriteDataBase } = FavoriteStorage();
  const [currentListRender ,setcurrentListRender] = useState<GithubersType[]>(favoriteDataBase)
  const [currentStackList, setcurrentStackList] = useState('')


  useEffect(() => {
    setcurrentListRender(favoriteDataBase);
    setcurrentStackList("Todas")
  }, [favoriteDataBase]);


  const handleStack =(stackListName : string) => {
    if(stackListName === 'Todas'){
      setcurrentStackList(stackListName)
      setcurrentListRender(favoriteDataBase) 
      return
    }    
    const filterByStack = favoriteDataBase.filter((item) => {return item.stack === stackListName.toLocaleLowerCase()})
    
    if(filterByStack.length > 0){
      console.log(`tem ${stackListName}`)
    }else{
      console.log(`não tem ${stackListName}`)
    }
    
    setcurrentListRender(filterByStack)
    setcurrentStackList(stackListName)
  }
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
        <nav
          role="Stack-List-Navigation"
          className=" overflow-hidden  grid place-content-center"
        >
          <ul className="flex overflow-x-auto items-center gap-2 justify-between h-16">
            {stacksList.map(({ stackname }, index) => {
              return (
                <>
                  <li
                    role={`${stackname} item da lista`}
                    title={stackname}
                    key={index}
                    className={clsx("w-[230px] px-4 py-2 flex flex-row rounded-full font-semibold font-LexendFont hover:bg-purple-dark hover:text-white text-[12px]", {"bg-purple-dark text-white" : currentStackList === stackname})}
                    onClick={()=>handleStack(stackname)}
                  >
                    {stackname}
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>

      <section className="flex flex-col gap-4">
        {currentListRender?.length > 0 ?
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
                    className="flex bg-white rounded-md py-4 items-center justify-around w-[99%] px-2"
                  >
                    <header className="flex w-[200px]">
                      <figure className="w-12 h-12 rounded-md overflow-hidden">
                        <img src={avatar_url} alt={id} />
                      </figure>

                      <p className=" flex flex-col pl-2 justify-center">
                        <span className="flex items-center gap-1">
                          {" "}
                          <strong className="flex text-[10px] flex-wrap leading-4 text-slate-900 font-LexendFont">
                            {firstAndSecondName}
                          </strong>
                          <span className="text-[8px] px-2 py-1 bg-purple-400 rounded-full text-purple-700 font-bold">
                            {stack}
                          </span>
                        </span>
                        <span className="text-[8px] text-zinc-600 font-LexendFont">
                          @{login}
                        </span>
                      </p>
                    </header>

                    <article className="flex w-[90px] justify-center gap-3">
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
                  </section>
                </>
              );
            }
          ) : <span>Essa Categoria ainda não foi adicionado Por Você</span>}
      </section>
    </section>
  );
};
