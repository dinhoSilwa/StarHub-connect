import "./App.css";
import { HomePage } from "./components/Home";
import { ModalName } from "./components/Modal/modalname";
import { useUserNameStore } from "./store/usrname";

function App() {
  const { usernameLogin } = useUserNameStore();

  return <>{usernameLogin ? <HomePage /> : <ModalName />}</>;
}

export default App;
