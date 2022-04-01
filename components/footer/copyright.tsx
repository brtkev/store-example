import Image from "next/image";

export default function Copyright(){
  return(
    <div className="relative bg-white flex flex-col px-4 py-8 w-full items-center lg:px-20 lg:flex-row lg:py-0 lg:h-14 lg:items-center" >
      <p className="text-sm text-terciary-p-color mb-5 lg:mb-0 lg:mr-7">AliOlam Corporation © Copyright 2021 – Reservados todos los derechos.</p>
      <div className="flex mb-5 lg:mb-0" >
        <a className="cursor-pointer test-sm text-bold hover:underline mr-7" >Terminos y condiciones</a>
        <a className="cursor-pointer test-sm text-bold hover:underline" >Politicas de privicidad</a>
      </div>
      <div className="flex lg:absolute right-20 justify-center" >
        <div className="mr-4 cursor-pointer">
          <Image width={48} height={24} src={"/assets/logos/paypal.png"} />
        </div>
        <div className="cursor-pointer" >
          <Image width={48} height={24} src={"/assets/logos/stripe.png"} />
        </div>
      </div>
    </div>
  )
}