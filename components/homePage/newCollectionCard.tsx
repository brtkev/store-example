import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}
export default function NewCollectionCard({className, ...props} : Props){
  const containerClass = `flex rounded-lg ${className}`
  return(
    <div className={containerClass} >
      <div className="flex-1 pl-25 pt-15" >
        <h2 className="text-4xl text-bold text-white  mb-6" >Nueva coleccion mujer</h2>
        <p className="text-base text-semibold text-white mb-6" >Obtenga un descuento del 50%</p>
        <Link href="#" ><a className="text-secondary text-sm hover:underline" >Comprar ahora</a></Link>
      </div>
      <div className="flex-none">
        <Image height={248} width={416} src={require('public/home/purse.png')} />
      </div>
    </div>
  )
}