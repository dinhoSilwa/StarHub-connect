export const HeaderProfile = () =>{
  return(
    <>
    <header className="flex justify-between px-4 h-20 border items-center">
      <figure className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
        <img src="" alt="pfp" />
      </figure>

      <p className="flex-1 border pl-2 font-bold">
        Olá, {"Dinho"} 👋
      </p>

      <div>
        [icon bell]
      </div>
    </header>
    </>
  )
}