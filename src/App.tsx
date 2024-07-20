import "./App.css";
import { Search } from "./components/SearchUser";
import { UserFound } from "./components/userfound";
function App() {
  return (
    <>
      <header>Olá Dinho , bem vindo ao seu starHub</header>
      <Search />
      <UserFound />
    </>
  );
}

export default App;
