import { useState } from "react";
import "./App.css";
import { UserFound } from './components/userfound'
import { formaterForSearch } from "./utils/textformatter";


function App() {
  const [inputTerm, setinputTerm] = useState("");
  const [githuber, setgithuber] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const term = formaterForSearch(value);
    setinputTerm(term);
  };

  const searchGithubers = () => {
    setgithuber(inputTerm)
  }

  return (
    <>
      <header>Olá Dinho , bem vindo ao seu starHub</header>

      <section>[banner]</section>

      <form action="">
        <fieldset>
          <legend>Nova busca</legend>
          <label htmlFor="Digite o nickname"></label>
          <input
            type="text"
            value={inputTerm}
            placeholder="Digite o username do Github"
            onChange={handleSearch}
          />{" "}
          <button type="button" onClick={searchGithubers}>
            Buscar
          </button>
        </fieldset>
      </form>

      {"Use foud : "}

      {
      githuber && <UserFound username={githuber} />
     }


    </>
  );
}

export default App;
