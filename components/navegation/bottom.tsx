import Button from 'components/buttons/button';
import Profile from 'components/profile';
import Image from 'next/image';
import Link from 'next/link';

const linkClassName = "text-white mr-8 text-sm hover:underline"
export default function BottomNavegation(){
  return(
    <div className="lg:flex hidden w-full bg-primary h-24  items-center justify-between px-12 ">
      <div className="flex items-center justify-center">
        <Link href="#" >
          <Button>
            <div className='mr-2 relative flex justify-center' >
              <Image height={28} width={28} src={require('public/icons/menu.png')} />
            </div>
            <p className='text-white text-sm'>
              Todas las categoria
            </p>
          </Button>
        </Link>
        <div className='relative h-12 w-px bg-white mx-4' ></div>
        <Link href="/Tiendas">
          <a className={linkClassName} >Tiendas</a>
        </Link>      
        <Link href="/create">
          <a className={linkClassName} >Crear Eco-Tienda</a>
        </Link>
        <Link href="/about">
          <a className={linkClassName} >Sobre nosotros</a>
        </Link>
        <Link href="/ambassador">
          <a className={linkClassName} >Olambassador</a>
        </Link>
      </div>
      
      <Profile />

    </div>
  )
}
