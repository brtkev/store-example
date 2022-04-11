import type { NextPage } from 'next'
import Head from 'next/head'
import Navegation from 'components/navegation'
import Footer from 'components/footer'
import Slideshow from 'components/slideshow'
import  { Carrousell, starsElements } from 'components/productCard'
import Image from 'next/image'
import Button from 'components/buttons/button'
import { useState } from 'react'

const ProductId: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <div className='flex flex-col items-center w-full px-4 lg:px-20'>
        <Card />
        <ItemInformationCard
          information={[
            {title : 'DESCRIPCION', p: ['Cubilia vestibulum interdum nisl a parturient a auctor vestibulum taciti vel bibendum tempor adipiscing suspendisse posuere libero penatibus lorem at interdum tristique iaculis redosan condimentum a ac rutrum mollis consectetur. Aenean nascetur vehicula egestas a adipiscing a est egestas suspendisse parturient diam adipiscing mattis elementum velit pulvinar suscipit sagittis facilisis facilisi tortor morbi at aliquam.',
            'Netus nisi volutpat donec condimentum nunc eu sem odio condimentum hendrerit nisl mollis scelerisque ad vitae a eu.',
            'Etiam dictumst congue a non class risus sed a. Diam adipiscing a condimentum in a nisl a maecenas libero pharetra tincidunt phasellus justo molestie bibendum. Vestibulum penatibus vestibulum lobortis vehicula euismod a platea taciti a eget in nec cum eget curabitur justo id enim mi velit at cum. Eu amet ut elit a sociis himenaeos eros nunc at pharetra magna suscipit.']},
            {title : 'SOBRE LA TIENDA', p: ['Cubilia vestibulum interdum nisl a parturient a auctor vestibulum taciti vel bibendum tempor adipiscing suspendisse posuere libero penatibus lorem at interdum tristique iaculis redosan condimentum a ac rutrum mollis consectetur. Aenean nascetur vehicula egestas a adipiscing a est egestas suspendisse parturient diam adipiscing mattis elementum velit pulvinar suscipit sagittis facilisis facilisi tortor morbi at aliquam.',
            'Netus nisi volutpat donec condimentum nunc eu sem odio condimentum hendrerit nisl mollis scelerisque ad vitae a eu.',
            'Etiam dictumst congue a non class risus sed a. Diam adipiscing a condimentum in a nisl a maecenas libero pharetra tincidunt phasellus justo molestie bibendum. Vestibulum penatibus vestibulum lobortis vehicula euismod a platea taciti a eget in nec cum eget curabitur justo id enim mi velit at cum. Eu amet ut elit a sociis himenaeos eros nunc at pharetra magna suscipit.']},
            {title : 'VALORACIONES', p: ['Cubilia vestibulum interdum nisl a parturient a auctor vestibulum taciti vel bibendum tempor adipiscing suspendisse posuere libero penatibus lorem at interdum tristique iaculis redosan condimentum a ac rutrum mollis consectetur. Aenean nascetur vehicula egestas a adipiscing a est egestas suspendisse parturient diam adipiscing mattis elementum velit pulvinar suscipit sagittis facilisis facilisi tortor morbi at aliquam.',
            'Netus nisi volutpat donec condimentum nunc eu sem odio condimentum hendrerit nisl mollis scelerisque ad vitae a eu.',
            'Etiam dictumst congue a non class risus sed a. Diam adipiscing a condimentum in a nisl a maecenas libero pharetra tincidunt phasellus justo molestie bibendum. Vestibulum penatibus vestibulum lobortis vehicula euismod a platea taciti a eget in nec cum eget curabitur justo id enim mi velit at cum. Eu amet ut elit a sociis himenaeos eros nunc at pharetra magna suscipit.']},
            {title : 'ENVÍO Y ENTREGA', p: ['Cubilia vestibulum interdum nisl a parturient a auctor vestibulum taciti vel bibendum tempor adipiscing suspendisse posuere libero penatibus lorem at interdum tristique iaculis redosan condimentum a ac rutrum mollis consectetur. Aenean nascetur vehicula egestas a adipiscing a est egestas suspendisse parturient diam adipiscing mattis elementum velit pulvinar suscipit sagittis facilisis facilisi tortor morbi at aliquam.',
            'Netus nisi volutpat donec condimentum nunc eu sem odio condimentum hendrerit nisl mollis scelerisque ad vitae a eu.',
            'Etiam dictumst congue a non class risus sed a. Diam adipiscing a condimentum in a nisl a maecenas libero pharetra tincidunt phasellus justo molestie bibendum. Vestibulum penatibus vestibulum lobortis vehicula euismod a platea taciti a eget in nec cum eget curabitur justo id enim mi velit at cum. Eu amet ut elit a sociis himenaeos eros nunc at pharetra magna suscipit.']},
          ]}
        />
        <div className='overflow-hidden self-start lg:self-center max-w-[1400px]'>
          <Carrousell defaultItems className='mb-16 self-start' />
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default ProductId;

const ItemInformationCard = (props :{
  information? : Array<{title : string, p : string[]}>
}) => {
  const [currentDescriptionActive, setCurrentDescriptionActive] = useState(0)
  return(
    <div className="mb-16 flex w-full justify-center">
      <div className='lg:hidden w-full ' >
        {props.information?.map( (informationItem, i) => {
          const [isActive, setIsActive] = useState(false);
          const toggleActive = () => setIsActive(prev => !prev);
          let className = 'w-full border-b border-input-border-color ';
          if(i === 0){
            className += ' border-t';
          }
          const titleClass = `text-base font-semibold ${isActive ? 'text-secondary' : 'text-terciary-p-color'}`
          return(
            <div key={i} className={className}>
              <div className='cursor-pointer relative h-7 w-full px-8 flex items-center' onClick={toggleActive}>
                <h3 className={titleClass } >{informationItem.title}</h3>
                <div className='absolute right-8 flex justify-center' >
                  {isActive ? <Image src={require('public/icons/pointer-up-black.png')} width={24} height={24} />:
                  <Image src={require('public/icons/pointer-down-black.png')} width={24} height={24} />}
                </div>
              </div>
              {isActive && <p className='text-base text-p-color text-left' >{informationItem.p[0]}</p>}
            </div>
          )
        })}
      </div>
      <div className='hidden lg:flex flex-col w-full border-t border-b border-input-border-color pb-12 items-center max-w-[1400px]' >
        <div className='flex h-7 w-full mb-8 ' >
        {props.information?.map((informationItem, i) => {
            const className = `cursor-pointer mr-4 text-semibold ${i === currentDescriptionActive ? 'text-title-color border-t-2 border-primary' : 'text-terciary-p-color'}`
            const setCurrent = () => setCurrentDescriptionActive(i);
            return(
              <h3 className={className} onClick={setCurrent} >{informationItem.title}</h3>
            )
          })}
        </div>
        <div className=''>
          <h1 className='text-3xl text-bold text-title-color mb-7'>{props.information?.at(currentDescriptionActive)?.title}</h1>
          { props.information?.at(currentDescriptionActive)?.p.map( p => <p className='text-p-color mb-7 ' >{p}</p>) }
        </div>
      </div>
    </div>
  )
}

const Card = () => {
  return(
    <div className='lg:flex lg:py-20 max-w-[1400px] w-full' >
      <Slideshow 
        className='pt-8 pb-6 lg:hidden'
        imageSrc={require('public/temp/producto-1.png')} />
      <div className='hidden lg:grid grid-cols-3 grid-rows-2 gap-4 flex-1 mr-4' >
        <div className='relative col-start-1 col-end-4 row-start-1 row-end-2 ' >
          <Image src={require('public/temp/producto-1.png')} objectFit="fill" layout="fill"  />
        </div>
        <div className='relative col-start-1 col-end-2 row-start-2 row-end-3 h-32 ' >
          <Image src={require('public/temp/producto-2.png')} objectFit="fill" layout="fill"  />
        </div>
        <div className='relative col-start-2 col-end-3 row-start-2 row-end-3 h-32 ' >
          <Image src={require('public/temp/producto-3.png')} objectFit="fill" layout="fill"  />
        </div>
        <div className='relative col-start-3 col-end-4 row-start-2 row-end-3 h-32 ' >
          <Image src={require('public/temp/producto-4.png')} objectFit="fill" layout="fill"  />
        </div>
      </div>
      <div className='flex-1'>
        <p className="mb-4 text-sm" >Home / Moda hombre / Accesorios / Reloj inteligente edicion madera</p>
        <h1 className="text-5xl text-bold text-left mb-5" >Reloj inteligente edición madera</h1>
        <div className='flex justify-between mb-8'>
          <div>
            <div className='flex' >
              {starsElements(4)}
              <p className='text-terciary-p-color mb-6' >(20) Opiniones</p>
            </div>
            <p className='text-secondary text-3xl'>$49.00 USD</p>
          </div>
          <Image src={require('public/temp/velvetica.png')} width={82} height={72} />
        </div>
        <p className='text-terciary-p-color mb-8' >Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus.</p>
        <div className='grid grid-cols-2 grid-rows-2' >
          <p className='col-start-1 col-end-2 mb-8'>Talla:</p>
          <div className='col-start-2 col-end-3 flex'>
            <div className='mr-4 bg-background rounded-full relative h-8 w-8 flex justify-center items-center border border-secondary' >S</div>
            <div className='mr-4 bg-background rounded-full relative h-8 w-8 flex justify-center items-center'>M</div>
            <div className='bg-background rounded-full relative h-8 w-8 flex justify-center items-center'>L</div>
          </div>
          <p className='col-start-1 col-end-2 row-start-2'>Color:</p>
          <div className='flex col-start-2 col-end-3 row-start-2' >
            <div className='mr-4 bg-background rounded-full relative h-8 w-8 flex justify-center items-center border border-secondary' >
              <div className='rounded-full relative h-6 w-6 bg-[#f00]'></div>  
            </div>
            <div className='mr-4 bg-background rounded-full relative h-8 w-8 flex justify-center items-center'>
              <div className='rounded-full relative h-6 w-6 bg-[#00f]'></div>  
            </div>
            <div className='bg-background rounded-full relative h-8 w-8 flex justify-center items-center'>
              <div className='rounded-full relative h-6 w-6 bg-yellow bg-[#0f0]'></div>  
            </div>
          </div>
        </div>
        <p className='text-[#53AF81] mb-5' >99 Unidades disponibles</p>
        <div className='flex mb-5'>
          <p className='text-semibold mr-4'>Cantidad:</p>
          <button className='text-3xl relative w-6 h-8 border border-[#CECECE] flex justify-center items-center' >-</button>
          <div className='relative w-6 h-8 bg-background flex justify-center items-center' >1</div>
          <button className='text-2xl relative w-6 h-8 border border-[#CECECE] flex justify-center items-center' >+</button>
        </div>
        <div className='w-full flex justify-center pb-8 mb-8 border-b border-input-border-color'>
          <Button className='text-white w-full mb-5' >Comprar ahora</Button>
        </div>
        <p className='mb-4'>SKU: N/A</p>
        <p className='mb-4'>Categorias: Accesorios, Relojes</p>
        <div className='flex mb-10'>
          <p className='mr-2'>Compartir:</p>
          <div className='mr-4'>
            <Image src={require('public/icons/facebook-black.png')} width={24} height={24}  />
          </div>
          <div>
            <Image src={require('public/icons/instagram-black.png')} width={24} height={24}  />
          </div>
        </div>
      </div>
    </div>
  )
}