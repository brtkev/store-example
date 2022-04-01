import { FC } from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/react"


import LoginButton from '../buttons/loginButton';

import googleLogo from '../../public/googleLogo.svg';
import fbLogo from '../../public/facebookLogo.svg';

const SocialsButtons : FC = () => 
<>
  <LoginButton onClick={()=> signIn("google")} className='bg-white border-primary text-p-color hover:bg-primary hover:border-primary hover:text-white mb-4' >
    <div className='flex items-center justify-center' >
      <Image src={googleLogo} alt="google logo"  ></Image>
      <p  className='mx-2' >CONTINUAR CON GOOGLE</p>
    </div>
  </LoginButton>
  <LoginButton onClick={() => signIn("auth0")} className='bg-white border-primary text-p-color hover:bg-primary hover:border-primary hover:text-white mb-6' >
    <div className='flex items-center justify-center' >
      <Image src={fbLogo} alt="facebook Logo"  ></Image>
      <p  className='mx-2' >CONTINUAR CON FACEBOOK</p>
    </div>
  </LoginButton>
</>

export default SocialsButtons;