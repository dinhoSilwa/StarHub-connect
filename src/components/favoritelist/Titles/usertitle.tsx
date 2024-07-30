import { ComponentProps } from "react";

interface FavoriteNameProps extends ComponentProps<'h3'>{

firstAndSecondName : string
login: string | undefined
}

export const Favoritename = ({firstAndSecondName, login} : FavoriteNameProps) => {
  return (
    <>
      <h3 className="flex items-start gap-1">
        {" "}
        <strong className="flex text-[10px] flex-wrap leading-4 text-slate-900 font-LexendFont small:text-[12px]">
          {firstAndSecondName === "" ? login : firstAndSecondName}
        </strong>
      </h3>
    </>
  );
};
