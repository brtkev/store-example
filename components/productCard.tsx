import Image from 'next/image'
import React from 'react';

type ProductCardProps = {
  image: any,
  description: string,
  big? : boolean,
  stars: 0 | 1 | 2 | 3 | 4 | 5,
  price: string, offerPrice?: string;
  newTag?: boolean, offerTag?: boolean
}

const ProductCard = ( {big, image, description, stars = 0, price, ...props} : ProductCardProps) => {
  const starsElements = () => {
    const starsArray = [];
    for (let index = 0; index < stars; index++) starsArray.push(<div key={index} className="mr-2"><Image width={14} height={14} src={require('public/home/icon/star.png')} /></div>)
    for(let index = stars; index < 5; index++) starsArray.push(<div key={index} className="mr-2"><Image width={14} height={14} src={require('public/home/icon/star-disabled.png')} /></div>)
    return starsArray
  }
  if(big){
    return(
      <div className="relative w-77 border border-gray-500 rounded mr-4 flex-none">
        {image && <Image width={308} height={232} src={image} />}
        <div className="px-2 py-2" >
          <p className="tracking-wider mb-2" >{description}</p>
          <div className="flex mb-4">
            {starsElements()}
            <p className="text-terciary-p-color" >(20)</p>
          </div>
          { props.offerPrice ? 
          <p>
            <span className="text-title-color">${price}</span>
            <span className="text-terciary-p-color" > desde </span>
            <span className="text-secondary" >${props.offerPrice}</span></p> : <p className="text-semibold" >{price}</p>}
        </div>
        <div className='absolute z-20 top-0 right-0  flex' >
          {props.offerTag && <div className='bg-primary py-1 px-2 rounded-lg text-white' >nuevo</div>}
          {props.newTag && <div className='bg-secondary py-1 px-2 rounded-lg text-white ml-1' >rebaja</div>}
        </div>
      </div>
    )
  }
  return(
    <div className="relative w-50 border border-gray-500 rounded mr-4 flex-none">
      {image && <Image width={200} height={232} src={image} />}
      <div className="px-2 py-2" >
        <p className="tracking-wider mb-2" >{description}</p>
        <div className="flex mb-4">
          {starsElements()}
          <p className="text-terciary-p-color" >(20)</p>
        </div>
        { props.offerPrice ? 
          <p>
            <span className="text-title-color">${price}</span>
            <span className="text-terciary-p-color" > desde </span>
            <span className="text-secondary" >${props.offerPrice}</span></p> : <p className="text-semibold" >{price}</p>}
      </div>
      <div className='absolute z-20 top-0 right-0  flex' >
        {props.offerTag && <div className='bg-primary py-1 px-2 rounded-lg text-white' >nuevo</div>}
        {props.newTag && <div className='bg-secondary py-1 px-2 rounded-lg text-white ml-1' >rebaja</div>}
      </div>
    </div>
  )
};
export default ProductCard;


interface CarrousellProps extends React.HTMLAttributes<HTMLDivElement>{
  title? : string;
  items? : React.ReactNode
}

export const Carrousell = ({title, items,...props} : CarrousellProps) => {
  return(
    <div {...props} >
      {title && <h2 className="text-title-color text-3xl text-bold text-title-font mb-10">{title}</h2>}
      <div className="flex overflow-hidden">
        {items}
      </div>
    </div>
  )
}
