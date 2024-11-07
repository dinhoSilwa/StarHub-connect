import { githubersDetailsList } from "../../Home";
import { GithubersList } from "../Lista/githubersList";

export const GithubersListContainer = () => {
  return (
    <section>
      <ul className=" w-[345px] py-4 ml-auto mr-auto flex flex-col gap-2 items-center">
        {githubersDetailsList?.map(
          ({ avatar, username, nickname, stack, stackIcon }, index) => (
            <li className=" w-full" key={index}>
              <GithubersList
                avatar={avatar}
                username={username}
                nickname={nickname}
                stackIcon={stackIcon}
                stack={stack}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};
