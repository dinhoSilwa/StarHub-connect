import { useEffect } from 'react'
import notfoundImg from '../assets/banner/notfound.png'
import { userNameTerm } from '../store/searchResults'

export const NotfoundUser = () =>{
    const {term} = userNameTerm()

    useEffect(()=>{

    },[])

    return(
        <section className='flex items-center bg-white px-4 py-12 rounded-xl ml-auto mr-auto justify-center gap-4 shadow-lg'>
            <h3 className='font-LexendFont leading-4 text-red-800 text-[14px]'>
            Nenhum resultado encontrado para <strong>"{term}"</strong> no GitHub.
            </h3>
            <img src={notfoundImg} alt="usuário não encontrado" className=' opacity-45 w-20 s'/>
        </section>
    )
}