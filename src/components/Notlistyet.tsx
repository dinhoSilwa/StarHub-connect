import notList from '../assets/banner/notyet.png'
export const NotListYet = ({stack} : {stack : string}) =>{
    return(
        <>
        <section className='flex flex-col items-center h-64 justify-center gap-4 mt-8'>
            <h3 className='w-[50%] text-center font-LexendFont text-zinc-500 text-[16px] leading-6'>
            Você ainda não adicionou nada <strong>aos seu favoritos {stack === "Todas" ? '' : stack}.</strong>
            </h3>
            <img src={notList} alt="nenhuma lista" className='grayscale w-[50%]' />
        </section>
        </>
    )
}