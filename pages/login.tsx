import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import Title from '../components/LoginPage/title';
import LoginForm from '../components/LoginPage/loginForm'
import Separator from '../components/separator';
import SocialsButtons from '../components/LoginPage/socialsButtons';

import { useSession } from 'next-auth/react'


// box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31);

const Login: NextPage = () => {
  const { data: session } = useSession()
  React.useEffect(()=>{
    if(session) window.location.assign('/')
  }, [session])
  return (
    <div className="flex relative max-w-full min-h-screen box-border flex-col items-center justify-center bg-background md:p-14 p-0 m-0 ">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" shadow-md relative md:w-480 sm:w-full box-border sm:max-w-full md:bg-white bg-background md:rounded-3xl rounded-none py-8 px-4 md:px-8 flex flex-col items-center" >
          <Title text='Iniciar Sesión'
          description='¡Bienvenido! ingresa tu correo y contraseña para iniciar sesión en tu cuenta.' />
          <LoginForm />
          <Separator />
          <SocialsButtons />
          <div className='flex'>
            <p className='mx-1 text-p-color text-sm' >¿Quieres registrarte usando tu email?</p>
            <Link href="/register" ><a className='text-title-color text-sm font-medium hover:underline'>
              Entra aqui.</a></Link>
          </div>
          
      </div>
    </div>
  )
}

export default Login;
