
import './App.css'

function App() {

  return (

    <>
      <header>
        Olá Dinho , bem vindo ao seu starHub
      </header>


      <section>
        [banner]
      </section>

      <form action="">
        <fieldset>
          <legend>Nova busca</legend>
          <label htmlFor="Digite o nickname"></label>
          <input type="text" /> <button>Buscar</button>
        </fieldset>
      </form>
      <section>
        <h2>Recentes</h2>
        <ul>
          <li>huber01</li>
          <li>huber02</li>
          <li>huber03</li>
          <li>huber04</li>
        </ul>
      </section>

      <section>
        <h2>Favoritos</h2>

        <ul>
          <li>Frontend </li>
          <li>backend </li>
          <li>DevOps </li>
          <li>Mobile </li>
        </ul>
      </section>


      <section>
        <article>
          <figure>[pfp]</figure>
          <div>
            <h3>Githuber one</h3>
            <div>
              <span>[size Time : 2 anos]</span>
              <span>[repositorios : 12]</span>
              <span>[seguidores : 12]</span>
            </div>
          </div>
        </article>
      </section>
    </>

  )
}

export default App
