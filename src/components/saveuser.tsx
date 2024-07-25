// import {
//     ArchiveIcon,
//     CircleXIcon,
//     EllipsisVertical,
//     PenBox,
//     StarIcon,
//     User2,
//     UserCircle2,
//   } from "lucide-react";

//   import { GithubersType } from "../@types/githubusers";

//   import { extractFirstAndSecondName } from "../utils/stringutils";
//   import clsx from "clsx";
//   const [currentListRender, setcurrentListRender] =
//   useState<GithubersType[]>(favoriteDataBase);
//   const [profileOptions, setprofileOptions] = useState(false);



// export const ListUser = () =>{
//     return(
//         {currentListRender?.length > 0 ? (
//             currentListRender?.map(
//               (
//                 {
//                   login,
//                   avatar_url,
//                   name,
//                   id,
//                   totalStart,
//                   public_repos,
//                   followers,
//                   stack,
//                 },
//                 index
//               ) => {
//                 const firstAndSecondName = extractFirstAndSecondName(name);
//                 return (
//                   <>
//                     <section
//                       key={index}
//                       className="flex bg-white rounded-md py-4 items-center justify-around w-[99%] px-4 h-20"
//                     >
//                       <header className="flex w-[200px]">
//                         <figure className="w-12 h-12 rounded-md overflow-hidden">
//                           <img src={avatar_url} alt={id} />
//                         </figure>
  
//                         <p className=" flex flex-col pl-2 justify-center">
//                           <span className="flex items-center gap-1">
//                             {" "}
//                             <strong className="flex text-[10px] flex-wrap leading-4 text-slate-900 font-LexendFont">
//                               {firstAndSecondName}
//                             </strong>
//                             <span className="text-[7px] px-1 h-4 bg-purple-200 rounded-full text-purple-500 font-bold grid place-content-center">
//                               {stack}
//                             </span>
//                           </span>
//                           <span className="text-[8px] text-zinc-600 font-LexendFont">
//                             @{login}
//                           </span>
//                         </p>
//                       </header>
  
//                       <article className="flex w-[90px] justify-center gap-3">
//                         <div className="flex flex-col items-center justify-center gap-1">
//                           <ArchiveIcon
//                             size={14}
//                             strokeWidth={2}
//                             className="text-orange-500"
//                           />
//                           <p className="font-semibold font-LexendFont text-[11px]">
//                             {public_repos}
//                           </p>
//                         </div>
  
//                         <div className="flex flex-col items-center justify-center gap-1">
//                           <User2
//                             size={14}
//                             strokeWidth={2}
//                             className="text-orange-500"
//                           />
//                           <p className="font-semibold font-LexendFont text-[11px]">
//                             {followers}
//                           </p>
//                         </div>
  
//                         <div className="flex flex-col items-center justify-center gap-1">
//                           <StarIcon
//                             size={14}
//                             strokeWidth={2}
//                             className="text-orange-500"
//                           />
//                           <p className="font-semibold font-LexendFont text-[11px]">
//                             {totalStart}
//                           </p>
//                         </div>
//                       </article>
//                       <nav className=" h-10 w-10 grid place-content-center z-50 relative hover:bg-zinc-100 rounded-full cursor-pointer" 
//                       onClick={()=>setprofileOptions(!profileOptions)}
//                       >
//                         <EllipsisVertical size={20} className="text-purple-950" />
  
//                         {profileOptions ? (
//                           <ul
//                             className={clsx(
//                               "flex absolute flex-col gap-2 px-2 w-[170px] py-4 left-[-120px] shadow-md bg-white rounded-xl"
//                             )}
//                           >
//                             <header onClick={()=>setprofileOptions(!profileOptions)}>
//                               <CircleXIcon size={16} className="ml-auto" />
//                             </header>
  
//                             <li className="flex gap-1 items-center hover:text-purple-800">
//                               <UserCircle2 size={16} />{" "}
//                               <span className="text-[14px] text-zinc-800 font-semibold hover:text-purple-800">
//                                 Visualizar
//                               </span>
//                             </li>
  
//                             <li className="flex gap-1 items-center hover:text-purple-800">
//                               <PenBox size={16} />{" "}
//                               <span className="text-[14px] text-zinc-800 font-semibold hover:text-purple-800">
//                                 Editar
//                               </span>
//                             </li>
  
//                             <li className="flex gap-1 items-center hover:text-red-500">
//                               <CircleXIcon size={16} className="text-red-600" />{" "}
//                               <span className="text-[14px]">Remover</span>
//                             </li>
//                           </ul>
//                         ) : null}
//                       </nav>
//                     </section>
//                   </>
//                 );
//               }
//             )
//           ) : (
//             <span>Essa Categoria ainda não foi adicionado Por Você</span>
//           )}
//     )
// }