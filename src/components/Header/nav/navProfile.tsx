import { ArrowLeft, Laptop2Icon, LucideLogOut, LucideUser, Mail } from "lucide-react";
import { userProfileGithubName } from "../../../store/profileName";
import { useModalStore } from "../../../store/modalStoreManager";
import { ItemNavProfile } from "./item/item";



export const ProfileNavigation = () => {
  const { AuthProfile } = userProfileGithubName();
  const {toggleModal} = useModalStore()

  return (
    <section className="h-screen bg-white absolute w-[90%] top-0 left-0 z-50 font-LexendFont">

      <div className="w-full h-16 flex items-center justify-end" onClick={() =>toggleModal('modalProfile')}>
      
       <button className=" active:bg-gray-300 flex items-center justify-center h-12 w-12 rounded-full">
         <ArrowLeft />
       </button>
      </div>
      {AuthProfile?.map(({ login, avatar_url, name, bio }, index) => (
        <header className="flex flex-col items-center gap-2" key={index}>
          <figure className="h-10 w-10 rounded-full overflow-hidden">
            <img src={avatar_url} alt={login} />
          </figure>

          <h2>{name}</h2>
          <p className="text-[11px] text-center w-[80%] font-light">{bio}</p>
        </header>
      ))}

      <nav className="w-full flex justify-center">
        <ul className="flex w-full justify-center gap-4">
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
      <section className="pt-12">
        {AuthProfile?.map(({ name }, index) => (
          <div key={index}>
            <ul className="font-LexendFont">
            <ItemNavProfile icon={<LucideUser className="text-sm" />} title={"Nome"} subtitle={name} />
            <ItemNavProfile icon={<Laptop2Icon className="text-sm" />} title={"Stack"} subtitle={"Frontend"} />
            <ItemNavProfile icon={<Mail  className="text-sm" />} title={"Stack"} subtitle={"Frontend"} />
            <ItemNavProfile icon={<LucideLogOut className="text-sm" />} title={"Sair"} subtitle={""} />

            
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};
