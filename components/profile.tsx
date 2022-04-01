import React from 'react';
import { useSession, signOut } from 'next-auth/react'
import LoginButton from './buttons/loginButton';
import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
  const { data : session } = useSession();
  //for now if you click on Profile when log in, you get logged out
  if (session) {
    return (
      <div className='flex items-center cursor-pointer' onClick={() => signOut()} >
        <p className='lg:block hidden text-white text-semibold mr-4' >Hello, {session?.user?.name} </p>
        {session?.user?.image && 
        <div className='w-7 h-7 lg:w-8 lg:h-8' >
          <Image className='rounded-full' width={32} height={32} src={session?.user?.image as any} alt={"profile pic"} />
        </div>}
      </div>
    )
  }
  return (
    <Link href={'/login'} >
      <a className='flex items-center cursor-pointer'  >
        <div className='w-7 h-7 lg:w-8 lg:h-8' >
          <Image width={32} height={32} src={require('public/icons/user.png')} />
        </div>
        <p className='lg:block hidden text-white text-semibold ml-4' >Iniciar Sesion</p>
      </a>
    </Link>
  )
}