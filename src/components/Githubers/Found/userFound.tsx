import { stacksList } from "../../../model/allfavorites";
import { SerachUsernameStore } from "../../../store/searchResults";

export const GithuberFound = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;
  const { userFound } = SerachUsernameStore();
  return (
    <section>
      <span>Achou</span>
      <img
        src={userFound?.avatar_url}
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <span>{userFound?.login}</span>
        <span>{userFound?.followers}</span>
        <span>{userFound?.public_repos}</span>
      </div>
      <div>
        <h2>Adicionar Flag de Stack</h2>
        <ul className="flex gap-2 flex-wrap">
          {stacksList.map(({ stackname }, index) => (
            <li key={index} className="border p-2">
              {stackname}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-green-500 text-white">Salvar</button>
      <button className="border-red-300 border-2">Remover</button>
    </section>
  );
};
