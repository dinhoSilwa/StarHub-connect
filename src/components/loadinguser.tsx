import loadingUser from '../assets/banner/loadinggithub.png'
import loadingHands from '../assets/banner/loadinghands.png'

export const LoadingUser = () =>{
    return(
        <section className='flex items-center w-[90%] bg-zinc-200 px-2 py-8 rounded-md ml-auto mr-auto justify-center gap-4 '>
         <article className='flex flex-col items-start'>
         <h3 className='font-LexendFont leading-4 text-zinc-800 text-[10px] animate-bounce'>
            Procurando usuário no .....
            </h3>
            <img src={loadingUser} className='w-32' alt="carregando usuário"  />
         </article>

       
         <figure>
         <img src={loadingHands} alt="carregando" className='animate-float w-[100px] ml-6' />
         </figure>
       
        </section>
    )
}