import { useState } from "react";
import { stacksList } from "../../model/allfavorites";

export const NavigationStack = () => {
  const [currentStack, setcurrentStack] = useState<string | null>("Todas");
  return (
    <nav role="Stack-List-Navigation w-full" className="overflow-scroll flex">
      <ul className="flex overflow-x-auto space-x-2 w-[90%] ml-auto mr-auto">
        {stacksList.map(({ icon, stackname }, index) => (
          <li
            className={` ${index == 0 ? "ml-4" : ""} w-28 h-28 font-LexendFont px-12 flex flex-col justify-center items-center gap-2 rounded-md ${currentStack === stackname ? "bg-[#ffc171] font-bold text-bgDark-primary" : "bg-zinc-200 dark:bg-bgDark-second"}`}
            key={index}
            onClick={() => setcurrentStack(stackname)}
          >
            <span
              className="text-[32px] rounded-lg"
              style={{
                textShadow:
                  stackname === currentStack ? "2px 2px 4px #c64908" : "none",
              }}
            >
              {icon}
            </span>
            <span>{stackname}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
