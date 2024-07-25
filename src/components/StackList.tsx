import { ComponentProps } from "react";
import { stacksList } from "../model/allfavorites";
import clsx from "clsx";

interface StackListProps extends ComponentProps<"nav"> {
  currentStackList: string;
  handleStack: (stackname: string) => void;
  menuList: boolean;
}
export const StackListRender: React.FC<StackListProps> = ({
  currentStackList,
  handleStack,
  menuList,
  ...props
}) => {
  return (
    <nav
      role="Stack-List-Navigation"
      className=" overflow-hidden  grid place-content-center"
      {...props}
    >
      <ul className="flex overflow-x-auto items-center gap-2 justify-between h-16">
        {stacksList.map(({ stackname }, index) => {
          return (
            <>
              <li
                role={`${stackname} item da lista`}
                title={stackname}
                key={index}
                className={clsx(
                  "w-[230px] px-4 py-2 flex flex-row rounded-full font-semibold font-LexendFont text-[12px] cursor-pointer",
                  {
                    "bg-purple-dark text-white": currentStackList === stackname,
                  }
                )}
                onClick={() => handleStack(stackname)}
              >
                {stackname}
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};
