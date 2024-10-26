import {ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

export interface GithubersProps extends ComponentProps<"article"> {
  avatar: string;
  username: string;
  nickname: string;
  stack: string;
  stackIcon : string
}
export const GithubersList = ({
  avatar,
  username,
  nickname,
  stack,
  stackIcon,
  ...props
}: GithubersProps) => {
  return (
    <article {...props} className="h-20 flex items-center justify-center px-4 bg-gray-0 rounded-lg bg-gray-100 dark:bg-bgDark-intense">
      <div className="flex gap-1">
        <figure className="h-10 flex -space-x-2 rounded-full">
          <img src={avatar} alt={username} className="inline-block w-10 h-10 rounded-full"/>
          <span className="grid place-content-center text-lg leading-0 w-10 h-10 rounded-full bg-white dark:bg-bgDark-primary">{stackIcon}</span>
        </figure>
            <p className="flex flex-col -space-y-1 pl-2 dark:text-white">
            <div className="text-sm font-semibold">{username}</div>
            <div className="text-xs">{nickname}</div>
            </p>
      </div>

      <div className="flex-1 flex justify-end px-4">
      <ChevronRight className="dark:text-white" />
      </div>
    </article>
  );
};
