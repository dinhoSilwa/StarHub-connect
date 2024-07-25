import {
  CircleXIcon,
  
//   PenBox,
  UserCircle2,
} from "lucide-react";
import clsx from "clsx";
import { FavoriteStorage } from "../store/Favorites";
import { ComponentProps, useState } from "react";

interface CrudUserProps extends ComponentProps<'ul'>{
    user : string;
}


export const ManagerUser = ({user, ...props} : CrudUserProps) => {

    const {deleteFavorites} = FavoriteStorage()
    const [isOpen, setIsOpen] = useState(true)
  return (
    <>

        <ul {...props}
          className={clsx(
            "flex flex-col gap-2 px-2 w-[100px] py-4 shadow-md bg-white rounded-xl z-50 absolute right-0", {"hidden" : isOpen === false}
          )}
        >
          <header>
            <CircleXIcon size={16} className="ml-auto" onClick={()=>setIsOpen(!isOpen)}  />
          </header>

          <li className="flex gap-1 items-center hover:text-purple-800">
            <UserCircle2 size={16} />{" "}
            <span className="text-[14px] text-zinc-800 font-semibold hover:text-purple-800">
              Visualizar
            </span>
          </li>

          {/* <li className="flex gap-1 items-center hover:text-purple-800">
            <PenBox size={16} />{" "}
            <span className="text-[14px] text-zinc-800 font-semibold hover:text-purple-800">
              Editar
            </span>
          </li> */}

          <li className="flex gap-1 items-center hover:text-red-500"
          onClick={()=>deleteFavorites(user)}
          >
            <CircleXIcon size={16} className="text-red-600" />{" "}
            <span className="text-[14px]">Remover</span>
          </li>
        </ul>
      
    </>
  );
};
