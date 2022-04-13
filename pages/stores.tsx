import Button from "components/buttons/button"
import Footer from "components/footer"

import Navegation from "components/navegation"
import ProductCard, {ProductCardProps, starsElements} from "components/productCard"
import Head from "next/head"
import Image from "next/image"
import { MouseEventHandler, useEffect, useState } from "react"
import { Header, List } from "./products"


export default function Stores(){
  const items = Array<JSX.Element>(12).fill(<StoreCard 
    {...{
      image: require('public/temp/store-image.jpg'),
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      logo: require('public/temp/storeIcon.png'),
      phone: "(613) 343-9004",
      title: "VELVETICA",
      stars: 4

    }}
  />)

  return(
    <div  className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Header title="Todas las tiendas" />
      <div className="w-full lg:px-20 flex justify-center " >
        <div className="max-w-[1400px] w-full" >
          <List items={items} lengthHidden 
          justifyList="justify-center"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const StoreCard = (props : {
  key?: any,
  image: any,
  address: string,
  stars: number,
  title: string,
  phone: string,
  logo: any
}) => {

  return(
    <div key={props.key} className="z-0 relative w-full max-w-95 border border-gray-500 rounded-lg flex-none z-0 overflow-hidden">
      <div className="relative z-0" >
        <Image width={400} height={234} src={props.image} />
      </div>
      <div className="relative h-12 w-full flex justify-end px-3 items-center" >
        <Image src={require('public/icons/arrow-right-black.png')} width={24} height={24} /> 
        <div className="absolute -top-8 left-6 border-4 border-white rounded-full">
          <Image src={require('public/temp/storeIcon.png')} width={48} height={48} />
        </div>
      </div>
      <div className="absolute bg-transparent p-6 top-0" >
        <h3 className="text-white text-bold text-2xl mb-4" >{props.title}</h3>
        <div className="flex mb-6">
          {starsElements(props.stars)}
          <p className="text-gray-200" >(20)</p>
        </div>
        <div className="flex mb-4" >
          <div className="mr-1">
            <Image src={require('public/icons/location-marker.png')} width={16} height={16} />
          </div>
          <p className="text-white text-sm text-semibold" >{props.address}</p>
        </div>
        <div className="flex" >
          <div className="mr-1" >
            <Image src={require('public/icons/phone.png')} width={16} height={16} />
          </div>
          <p className="text-white text-sm text-semibold" >{props.phone}</p>
        </div>
      </div>
    </div>
  )
}
