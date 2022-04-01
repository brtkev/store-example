import ProductCard, {Carrousell} from "components/productCard";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import NewCollectionCard from "./newCollectionCard";


//temp
const products = () => {
  const products = [];
  for(let i = 0; i < 10; i++){
    products.push(<ProductCard key={i} image={require('public/home/product.png')} 
    description="Blusa Con Puño Recogido" stars={4} price="$49.00"  />)
  }
  return products;
}

//temp
const productsBig = () => {
  const products = [];
  for(let i = 0; i < 10; i++){
    products.push(<ProductCard key={i} big image={require('public/home/product-big.png')} 
    description="Toaster - Lampara De Escritorio De Madera Concept Tic - Tac" stars={4}
    newTag offerTag
    price="99" offerPrice="49.99"
    />
  )}
  return products;
}

export default function Products(){
  return(
    <div className="bg-background w-full lg:py-32 lg:px-20 px-4 flex justify-center items-center flex-col" >
      <NewCollectionCard className="bg-[#377C8A] w-full mb-28 lg:relative hidden" />
      <div className="lg:h-60 md:h40 relative w-full mb-10 aspect-square" >
        <Image layout="fill" objectFit="contain"  src={require('public/home/banner-add-1.png')} />
      </div>

      <div className="w-full" >
        
        <Carrousell title="Productos mas destacados" items={products()} className="lg:mb-27 mb-20" />
        <Carrousell title="Ofertas de la semana" items={productsBig()} className="lg:mb-27 mb-20" />
      </div>
    </div>
  )
}