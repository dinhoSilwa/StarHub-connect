import { ComponentProps } from "react";
import { stacksList } from "../model/allfavorites";
import clsx from "clsx";

interface SelectStackListProps extends ComponentProps<"ul"> {
  id: string;
  isStack: string;
  setisStack: (isStack: string) => void;
  addStack: (id: string, stackname: string) => void;
}
export const SelectStackList: React.FC<SelectStackListProps> = ({
  id,
  isStack,
  setisStack,
  addStack,
  ...props
}) => {
  return (
    <ul className="flex gap-2 flex-wrap overflow-hidden" {...props}>
      {stacksList.map(({ stackname }, index) => {
        return (
          <>
            {stackname === "Todas" ? null : (
              <li
                key={index}
                className={clsx(
                  "bg-purple-300 text-purple-800 px-2 font-bold rounded-md py-2 cursor-pointer text-[8px] flex items-center",
                  {
                    "bg-purple-800 text-white": isStack === stackname,
                  }
                )}
                onClick={() => {
                  addStack(id, stackname), setisStack(stackname);
                }}
              >
                {stackname}
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
