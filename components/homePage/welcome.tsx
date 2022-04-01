import Button from "components/buttons/button";
import Image from "next/image";

export default function Welcome(){
  return(
    <div className="relative flex flex-col-reverse md:flex-row md:justify-center md:items-center md:px-20 px-4 md:h-137" >
      <div className="w-full md:flex-initial md:w-158 pt-7 pb-20 md:pt-0 md:pb-0" >
        <h1 className="text-tile-color text-5xl mb-6" >
        Tu Eco-Tienda online en AliOlam
        </h1>
        <p className="text-base text-p-color mb-6" >
        ¿Te gustaría comenzar tu propio eco-ecommerce con nosotros? En pocos pasos podrás formar parte de una de las más grandes redes de marcas ambientalistas online.
        </p>
        <Button className="text-white text-sm px-14 ">
          Crear tienda
        </Button>
      </div>
      <div className="flex-initial relative w-full flex justify-center">
        <Image height={548} width={524} src={require('public/home/splash1.png')} /> 
        <div className="md:hidden absolute w-16 flex justify-between bottom-0 " >
          <div className="relative h-3 w-3 bg-gray-400 rounded-full" ></div>
          <div className="relative h-3 w-3 bg-primary rounded-full" ></div>
          <div className="relative h-3 w-3 bg-gray-400 rounded-full" ></div>
        </div>
      </div>
      <div className="hidden md:absolute w-16 flex justify-between bottom-0 mx-auto" >
        <div className="relative h-3 w-3 bg-gray-400 rounded-full" ></div>
        <div className="relative h-3 w-3 bg-primary rounded-full" ></div>
        <div className="relative h-3 w-3 bg-gray-400 rounded-full" ></div>
      </div>
    </div>
  );
}