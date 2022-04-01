import Image from 'next/image';
import Link from 'next/link';

export default function TopNavegation(){

  return(
    <div className="lg:flex hidden w-full bg-primary h-24 items-center justify-center px-20 relative">
        <div className='absolute left-15'>
          <Link href="/">
            <Image className='cursor-pointer' width={200} height={56} src={require('public/logo.png')} />
          </Link>
        </div>
      <div className="flex w-3/6 h-12" >
        <input className='px-4 py-1  rounded-l-lg h-12 placeholder:text-terciary-p-color w-full outline-none' 
        placeholder='Busca algun producto...' type="text" />
        <div className="bg-secondary h-12 w-12 rounded-r-lg flex items-center justify-center cursor-pointer" >
          <Image width={24} height={24} src={require('public/icons/search.png')} />
        </div>
      </div>
    </div>
  )
}
      