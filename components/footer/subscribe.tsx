

export default function Subscribe(){
  return(
    <div className="w-full flex justify-center lg:px-20 px-4" >
      <div className="flex flex-col items-center lg:w-3/6 w-full py-8 lg:px-0 px-4">
        <h2 className="text-3xl text-white text-bold mb-6 text-center" >SUSCRÍBETE A NUESTRO BOLETÍN</h2>
        <p className="text-center text-[#fffb] mb-10">Cuidaremos tu información. Déjanos tu email para recibir las mejores ofertas y promociones de AliOlam. Prometemos no enviar SPAM.</p>
        <div className={`flex h-12 w-full`} >
          <input className='px-4 py-1  rounded-l-lg h-12 placeholder:text-terciary-p-color w-full outline-none' 
          placeholder='Ingresa tu correo electronico' type="email" />
          <div className="bg-secondary h-12 px-2 rounded-r-lg flex items-center justify-center cursor-pointer" >
            <p className='text-white text-semibold' >suscribirse</p>
          </div>
        </div>
      </div>
    </div>
  )
}