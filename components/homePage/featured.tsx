import Button from 'components/buttons/button';
import Image from 'next/image'
const storesImage = [
  require('public/home/store1.png'),
  require('public/home/store2.png'),
  require('public/home/store3.png'),
  require('public/home/store1.png'),
  require('public/home/store2.png'),
  require('public/home/store3.png'),
];

const Stores = storesImage.map((img, i) => {
  let className = `rounded-full cursor-pointer lg:w-32 lg:h-32 md:w-28 md:h-28 w-20 h-20 `;
  className += i > 3 ? ' lg:block hidden' : 'relative'
  return(
    <div key={i} className={className}>
      <Image width={128} height={128} src={img} />
    </div>
  )
});

export default function Featured(){

  return(
    <div className="bg-background w-full lg:pt-32 pt-20 lg:px-20 px-4 flex justify-center items-center flex-col" >
      <h1 className="text-3xl text-title-color mb-14" >
        Tiendas Destacadas
      </h1>
      <div className='w-full flex justify-between mb-16' >
        {Stores}
      </div>
      <Button className='px-6' ><p className='text-sm text-semibold text-white' >Ver todas las tiendas</p></Button>
    </div>
  )
}