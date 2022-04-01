import Image from "next/image";
import { useState } from "react";


export default function Ads(){
  const [show, setShow] = useState(true);
  if(show)
    return(
      <div className="relative hidden h-12 w-full md:flex items-center justify-center bg-[#FFE6C7]" >
        <p className="mr-2">Oferta de mitad de temporada Hasta un 70% de descuento.</p>
        <a className="text-base text-bold hover:underline" >Comprar ahora</a>
        <button className="absolute right-10 lg:right-20 flex justify-center" onClick={() => setShow(false)} >
          <Image width={24} height={24} src={'/icons/x.png'} /> 
        </button>
      </div>
    )
  return null;
}