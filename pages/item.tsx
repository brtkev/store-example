import type { NextPage } from 'next'
import Head from 'next/head'
import Navegation from 'components/navegation'
import Footer from 'components/footer'
import Slideshow from 'components/slideshow'
import { starsElements } from 'components/productCard'
import Image from 'next/image'
import Button from 'components/buttons/button'

const Item: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <div className='px-4' >
        <Slideshow 
          className='pt-8 pb-6'
          imageSrc={require('public/producto-individual/producto-1.png')} />
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
          <Image src={require('public/producto-individual/velvetica.png')} width={82} height={72} />
        </div>
        <p className='text-p-color mb-8' >Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus.</p>
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
        <div className='w-full flex justify-center'>
          <Button className='text-white px-8 mb-5' >Comprar ahora</Button>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Item;
