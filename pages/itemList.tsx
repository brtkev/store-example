import Button from "components/buttons/button"
import Footer from "components/footer"

import Navegation from "components/navegation"
import ProductCard, { ProductCardProps } from "components/productCard"
import Head from "next/head"
import Image from "next/image"
import { MouseEventHandler, useEffect, useState } from "react"


export default function ItemList(){
  const items = Array<ProductCardProps>(12).fill({
    description: "Toaster - Lampara De Escritorio De Madera Concept Tic - Tac",
    image: require('public/home/product.png'),
    stars: 4,
    price: "49.00"
  })

  const [sortScreen, setSortScreen] = useState(true);
  const toggleSortScreen : MouseEventHandler<HTMLDivElement> = (ev) => {
    if(ev.currentTarget === ev.target){
      setSortScreen(prev => !prev);
    }
  }
  return(
    <div  className="relative flex min-h-screen flex-col overflow-hidden w-full">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Header />
      <Filter sortHandler={toggleSortScreen} />
      <FilterTags tags={['Ubicacion 1', '$50.00-$100.00']} />
      <List items={items} />
      {sortScreen && <SortScreen closeHandler={toggleSortScreen} />}
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

const Filter = (props : {
  sortHandler?: MouseEventHandler<HTMLDivElement>
}) => {
  return(
    <div className="w-full flex border-b border-gray-400 mb-6">
      <div onClick={props.sortHandler} className="flex-1 border-r border-gray-400 flex flex-col items-center py-1 cursor-pointer">
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
            <div key={i} className="mb-4 bg-gray-300 rounded-lg h-11 px-3 flex items-center mr-4 min-w-max" >
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

const List = (props: {
  items?: Array<ProductCardProps>
}) => {
  if(!Array.isArray(props.items)) return null;
  return(
    <div className="px-4 pb-30 flex flex-col items-center">
      <p className="text-terciary-p-color text-xs mb-8 self-start" >{props.items.length} productos</p>
      <div className="flex flex-wrap justify-center w-full mb-10">
        {props.items.map( (productProps, i) => {
          return(
            <div key={i} className="mx-2 mb-4" >
              <ProductCard  {...productProps} />
            </div>
          )
        })}
      </div>
      <div className="max-w-max">
        <p className="text-p-color text-xs text-center mb-4" >Has visto 12 de 48 productos</p>
        <ProgressBar className="mb-6" />
        <Button className="w-full" ><p className="text-white text-semibold text-sm" >Cargar mas</p></Button>
      </div>
  
    </div>
  )
}

const ProgressBar = (props : {
  className?: string
}) => {
  return(
    <div  className={"w-full rounded-lg h-2 bg-gray-400 overflow-hidden " + props.className}>
      <div className="w-1/4 h-full bg-primary" ></div>
    </div>
  )
}

const SortScreen = (props:{
  closeHandler? : MouseEventHandler<HTMLDivElement>
}) => {
  const [currentOption, setCurrentOption] = useState(0)
  const sortEffects = ['Orden por defecto', 'Menor precio', 'Mayor precio'];
  const sortOptions = sortEffects.map((text, i) => {
    const [active, setActive] = useState(false);
    const setOption = () => setCurrentOption(i);
    useEffect(() => {if(i === currentOption) setActive(true); else setActive(false)}, [currentOption])
    return(
      <div onClick={setOption} key={i} className="hover:bg-gray-300 cursor-pointer h-12 w-full px-3 flex justify-between items-center border-b border-gray-400">
        <p>{text}</p>
        {active ?
         <div  className="h-4 w-4 rounded-full bg-white border-4 border-secondary"></div>:
        <div  className="h-4 w-4 rounded-full bg-white border border-black"></div> }
      </div>
    )
  })

  
  return(
    <div onClick={props.closeHandler} className="fixed z-10 h-screen w-screen bg-[#0006] flex items-center pl-4 pr-8" >
      <div className="w-full h-36 border-b border-gray-400 bg-white">
        {sortOptions}
      </div>
    </div>
  )
}