import notfoundImg from '../assets/banner/notfound.png'
import { userNameTerm } from '../store/searchResults'

export const NotfoundUser = () =>{
    const {term} = userNameTerm()

    return(
        <section className='flex items-center w-[90%] bg-red-200 px-4 py-8 rounded-md ml-auto mr-auto justify-center gap-4'>
            <h3 className='font-LexendFont leading-4 text-red-800 text-[12px]'>
            Nenhum resultado encontrado para <strong>"{term}"</strong> no GitHub.
            </h3>
            <img src={notfoundImg} alt="usuário não encontrado" className=' opacity-45 w-20 s' />
        </section>
    )
}