import { ComponentProps } from "react";

interface FavoriteSubTitleProps extends ComponentProps<"h4"> {
  login: string | undefined;
}
export const FavoriteSubTitle = ({ login, ...props }: FavoriteSubTitleProps) => {
  return (
    <>
      <h4 className="text-[8px] text-zinc-600 font-LexendFont" {...props}>
        @{login?.toLocaleLowerCase()}
      </h4>
    </>
  );
};
