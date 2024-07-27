import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/Home";

function App() {


  const [login, setlogin] = useState(false)

  return (
    <>
    
{
  login ? <main>
  <div className="flex flex-col items-center">
    <input type="text" placeholder="digite o seu email" className="border" />
<input type="password" placeholder="Adicionar Senha" className="border" />
<button type="button" className="bg-green-500 px-6 py-2 w-[50%]"
onClick={()=>setlogin(!login)}
>
  Login
</button>
  </div>
</main> : <HomePage />
}
    </>
  );
}

export default App;
