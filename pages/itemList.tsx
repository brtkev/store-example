import Footer from "components/footer"

import Navegation from "components/navegation"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"


export default function ItemList(){
  return(
    <div  className="flex min-h-screen flex-col overflow-hidden w-full">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Header />
      <Filter />
      <FilterTags tags={['Ubicacion 1', '$50.00-$100.00']} />
      <Footer />
    </div>
  )
}

const Header = () => {

  return(
    <div className="flex flex-col items-center w-full py-12 bg-[#C2F5FF]">
      <h1 className="text-3xl text-title-color text-bold mb-6" >Comprar</h1>
      <p>Inicio / Todos los productos</p>
    </div>
  )
}

const Filter = () => {
  return(
    <div className="w-full flex border-b border-gray-400 mb-6">
      <div className="flex-1 border-r border-gray-400 flex flex-col items-center py-1 cursor-pointer">
        <Image className="mb-1" src={require('public/icons/switch-vertical-black.png')} width={24} height={24} />
        <p className="text-title-color text-semibold text-sm" >Ordenar</p>
      </div>
      <div className="flex-1 flex flex-col items-center py-1 cursor-pointer">
        <Image className="mb-1" src={require('public/icons/adjustments-black.png')} width={24} height={24} />
        <p className="text-title-color text-semibold text-sm" >Filtrar</p>
      </div>
    </div>
  )
}

const FilterTags = (props: {
  tags? : Array<string>
}) => {
  if(Array.isArray(props.tags)){
    return(
      <div  className="px-4 flex flex-wrap">
        {props.tags?.map( (tagText : string, i) => {
          const [isClose, setClose] = useState(false)
          const close = () => setClose(true);
          if(isClose) return null;
          return(
            <div className="mb-4 bg-gray-300 rounded-lg h-11 px-3 flex items-center mr-4 min-w-max" >
              <p className="text-sm text-p-color mr-1" >{tagText}</p>
              <Image className="cursor-pointer" onClick={close} src={require('public/icons/x.png')} width={16} height={16} />
            </div>
          )
        })}
      </div>
    )
  }

  return null;
}

const List = () => {
  
}