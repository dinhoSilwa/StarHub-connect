import { ComponentProps, useState } from "react";
import { stacksList } from "../../model/allfavorites";

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

  const [currentStack, setcurrentStack] = useState<string | null>(null)
  return (
    <nav
      role="Stack-List-Navigation w-full"
      className="overflow-scroll grid place-content-center"
      {...props}
    >
      <ul className="flex overflow-x-auto space-x-2 p-4">
        {stacksList.map(({ icon, stackname }, index) => (
          <li
            className={`w-40 h-40 text-white font-LexendFont px-12 flex flex-col justify-center items-center gap-2 rounded-md  ${currentStack === stackname ? 'bg-[#ffc171] text-orange-700 font-bold' : 'bg-zinc-200 text-bgDark-primary'}`}
            key={index}
            onClick={()=> setcurrentStack(stackname)}

          >
            <span className="text-[32px] rounded-lg" style={{textShadow: '2px 2px 4px #ef6307'}}>{icon}</span>
            <span>{stackname}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
