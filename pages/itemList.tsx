import Button from "components/buttons/button"
import Footer from "components/footer"

import Navegation from "components/navegation"
import ProductCard, { ProductCardProps } from "components/productCard"
import Head from "next/head"
import Image from "next/image"
import { MouseEventHandler, useEffect, useState } from "react"
// https://www.figma.com/file/SkNIiseakx6UzQI8PkZMNs/New-Aliolam?node-id=514%3A7592

export default function ItemList(){
  const items = Array<ProductCardProps>(12).fill({
    description: "Toaster - Lampara De Escritorio De Madera Concept Tic - Tac",
    image: require('public/home/product.png'),
    stars: 4,
    price: "49.00"
  })

  const [sortScreen, setSortScreen] = useState(false);
  const toggleSortScreen = () => setSortScreen(prev => !prev);
   

  const [filterScreen, setFilterScreen] = useState(false);
  const toggleFilterScreen = () => setFilterScreen(prev => !prev)
  return(
    <div  className="relative flex min-h-screen flex-col overflow-hidden w-full">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Header />
      <FilterButtons sortHandler={toggleSortScreen} filterHandler={toggleFilterScreen} />
      <div className="w-full flex lg:px-20">
        <div className="w-77 hidden lg:flex lg:flex-col mr-4">
          <Filter />
        </div>
        <div className="flex-1">
        <DesktopSort />
        <FilterTags tags={['Ubicacion 1', '$50.00-$100.00']} />
        <List items={items} />
        </div>
      </div>
      {sortScreen && <SortScreen closeHandler={toggleSortScreen} />}
      {filterScreen && <FilterScreen backHandler={toggleFilterScreen} />}
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

const FilterButtons = (props : {
  sortHandler?: MouseEventHandler<HTMLDivElement>,
  filterHandler? : MouseEventHandler<HTMLDivElement>
}) => {
  return(
    <div className="w-full flex border-b border-gray-400 mb-6 lg:hidden">
      <div onClick={props.sortHandler} className="flex-1 border-r border-gray-400 flex flex-col items-center py-1 cursor-pointer">
        <Image className="mb-1" src={require('public/icons/switch-vertical-black.png')} width={24} height={24} />
        <p className="text-title-color text-semibold text-sm" >Ordenar</p>
      </div>
      <div onClick={props.filterHandler} className="flex-1 flex flex-col items-center py-1 cursor-pointer">
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
  const _closeHandler : MouseEventHandler<HTMLDivElement> = (ev) => {
    if(props.closeHandler && ev.currentTarget === ev.target){
      props.closeHandler(ev)
    }
  }
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
    <div onClick={_closeHandler} className="fixed z-10 h-screen w-screen bg-[#0006] flex items-center pl-4 pr-8" >
      <div className="w-full h-36 border-b border-gray-400 bg-white">
        {sortOptions}
      </div>
    </div>
  )
}


const filtersInformation = [
  {title : "Categorias", filters: ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"]},
  {title : "Precio", filters: ["$50.00-$100.00", "$100.00-$200.00", "$200.00-$300.00"]},
  {title : "Ubicacion", filters: ["Ubicacion 1", "Ubicacion 2", "Ubicacion 3", "Ubicacion 4",]},
]

const Filter = () => {
  const _filter = filtersInformation.map((filter, i) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(prev => !prev);
  
    const optionsJSX = filter.filters.map((option, i) =>{
      const [activeFilter, setActiveFilter] = useState(false)
      const toggleActiveFilter = () => setActiveFilter(prev => !prev)
      return(
        <div key={i} onClick={toggleActiveFilter} className="cursor-pointer hover:bg-gray-300 relative h-12 px-4 flex items-center ">
          {activeFilter ?
          <div  className="h-4 w-4 mr-4 rounded-full bg-white border-4 border-secondary"></div>:
          <div  className="h-4 w-4 mr-4 rounded-full bg-white border border-black"></div> }
          <p>{option}</p>
        </div>
      )
    })
    return(
      <div key={i} className="w-full">
        <div onClick={toggleActive} className="cursor-pointer hover:bg-gray-300 relative h-12 px-4 flex items-center border-b border-gray-200">
          <p className="text-p-color text-semibold">{filter.title}</p>
          <div className="absolute right-4" >
            <Image src={require('public/icons/pointer-down-black.png')} width={16} height={16} />
          </div>
        </div>
        {active && 
        <div className="mt-4">
          {optionsJSX}
        </div>}
      </div>
    )
  })
  return(
    <>
      {_filter}
    </>
  )
}

const FilterScreen = (props : {
  backHandler?: MouseEventHandler<HTMLDivElement>
}) => {
  
  return(
    <div className="fixed z-10 h-screen w-screen bg-white overflow-y-auto flex flex-col justify-between" >
      <div className="w-full">
        <div className="w-full px-7 py-6 bg-primary" >
          <div className="flex items-center" onClick={props.backHandler} >
            <Image className="cursor-pointer" src={require('public/icons/arrow-left.png')} width={24} height={24} />
          </div>
        </div>
        <h1 className="mx-4 my-6 text-3xl text-title-color text-bold">Filtrar por:</h1>
        <div className="w-full ">
          <Filter />
        </div>
      </div>
      <div className="w-full pb-8 px-4 flex flex-col items-center cursor-pointer" >
        <p className="underline mb-4">Limpiar filtros</p>
        <Button className="w-full cursor-pointer" >
          <p className="text-white text-sm text-semibold" >Mostrar resultados</p>
        </Button>
      </div>

    </div>
  ) 
}

const DesktopSort = () => {

  return(
    <div className="w-full lg:flex hidden border-b pb-5 border-gray-200">
      <div className="text-xs text-p-color">(Mostrando 1-12 productos de 48 productos)</div>
      <div className="flex">
        <p className="text-bold text-sm text-title-color">Mostrar:</p>
        <div className="border border-gray-200 rounded-lg p-2 flex items-center">
          <p className="text-sm text-p-color">12</p>
          <Image src={require('public/icons/pointer-down-black.png')} width={16} height={16} />
        </div>
        <div className="border border-gray-200 rounded-lg p-2 flex items-center">
          <p className="text-sm text-p-color">Orden por defecto</p>
          <Image src={require('public/icons/pointer-down-black.png')} width={16} height={16} />
        </div>
      </div>
    </div>
  )
}