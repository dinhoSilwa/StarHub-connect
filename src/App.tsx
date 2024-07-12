
import { useState } from 'react'
import './App.css'
import { UserFound } from './components/userfound'
import { formaterForSearch } from './utils/textformatter'
import useUserGlobalData from './store.ts/favoriteusers'

function App() {

  const [inputTerm, setinputTerm] = useState("")
  const [githuber, setgithuber] = useState('')
  const {data, removeData} = useUserGlobalData()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const term = formaterForSearch(value)
    setinputTerm(term)
  }

  const searchGithubers = () => {
    setgithuber(inputTerm)
  }


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
          <input type="text" value={inputTerm} placeholder='Digite o username do Github' onChange={handleSearch} /> <button type='button' onClick={searchGithubers}>Buscar</button>
        </fieldset>
      </form>

    {"Use foud : "}

     {
      githuber && <UserFound username={githuber} />
     }
      <section>
        <h2>Recentes</h2>

<ul>
{ data ? data.map(({name, bio, avatar_url, public_repos, followers,  totalStart}, index) =>(
         
          <li key={index}>
            <figure>
              <img src={avatar_url} alt={`${name}`} style={{width : "10%"}} />
            </figure>
            <header>
              <h2> {name}</h2>
              <p>{bio}</p>

              <ul>
                <li>{public_repos}</li>
                <li>{followers}</li>
                <li>{totalStart}</li>


              </ul>
            </header>
           
           <button type='button' onClick={()=>removeData(name)}>Remover</button>
          
          </li>
        )) : "Nehum Favorito Ainda" }
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
