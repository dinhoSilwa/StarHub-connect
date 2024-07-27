import { EraserIcon } from 'lucide-react'
import loadingUser from '../assets/banner/loadinggithub.png'
import loadingHands from '../assets/banner/loadinghands.png'

export const LoadingUser = () =>{
    return(

<>
<button
      type="button"
      className=" h-8 text-purple-dark bg-purple-dark-white font-semibold px-2 rounded-md flex items-center gap-1 text-[8px]"
      
    >
      <EraserIcon size={12} />
      <span className="small:text-[12px]">Limpar busca</span>
    </button>
        <section className='flex items-center bg-white px-2 py-8 rounded-md ml-auto mr-auto justify-center gap-4 shadow-lg w-full'>
           
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
</>
    )
}