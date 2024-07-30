import { FavoriteStorage } from "../../store/Favorites";
import { extractFirstAndSecondName } from "../../utils/stringutils";
import { GithubersType } from "../../@types/githubusers";
import { useEffect, useState } from "react";
import { StackListRender } from "../Stacklist/StackList";
import { Archive, EllipsisVertical, Layers, Star, User2 } from "lucide-react";
import { ManagerUser } from "../Navegations/EditMenu";
import { NotListYet } from "../Notlistyet";
import { FigureImg } from "./Figure/figure";
import { Favoritename } from "./Titles/usertitle";
import { FavoriteSubTitle } from "./Titles/usersubtitle";
import { FavoriteIconsItems } from "./iconsitems/FavoriteIconsItems";

export const FavoriteList = () =>{
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

      <section className="flex flex-col gap-4 pb-20">
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
                createdAt,
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
                        <FigureImg imgUrl={avatar_url} altImg={name} />

                        <section className=" flex flex-col pl-2 justify-center">
                          <Favoritename
                            firstAndSecondName={firstAndSecondName}
                            login={login}
                          />

                          <FavoriteSubTitle login={login} />

                          <span className="hidden">
                            {createdAt?.toLocaleString()}
                          </span>
                        </section>
                      </header>

                      <ul className="flex gap-2">
                        <FavoriteIconsItems
                          icon={<User2 size={16} className="text-green-800" />}
                          favoriteData={followers}
                          itemType={"followers"}
                        />

                        <FavoriteIconsItems
                          icon={<Archive size={16} className="text-red-800" />}
                          favoriteData={public_repos}
                          itemType={"Archive"}
                        />

                        <FavoriteIconsItems
                          icon={<Star size={16} className="text-yellow-800" />}
                          favoriteData={totalStart}
                          itemType={"star"}
                        />

                        <FavoriteIconsItems
                          icon={
                            <Layers size={16} className="text-purple-800" />
                          }
                          favoriteData={stack}
                          itemType={"stack"}
                        />
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
