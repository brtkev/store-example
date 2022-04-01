import React, { useState } from 'react';
import type {FC} from 'react';
import Link from 'next/link';
import LoginButton from '../buttons/loginButton';
import LoginInput from '../inputs/loginInput';
import LoginInputContainer from '../inputs/loginInputContainer'

import Image from 'next/image';
import unseeIcon from '../../public/unsee-icon.svg';
import spinner from '../../public/spinner.svg';

import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from '../formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { unseeHandler } from '../inputs/loginInput/handlers';

type loginInput = {
  email: string,
  password: string,
};



const LoginForm : FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginInput>({resolver : yupResolver(loginSchema)});
  const [spinnerFlag, setSpinnerFlag] = useState(false);

  //onSubmit
  const submitHandler : SubmitHandler<loginInput> = (data, ev) => {
   console.log(data);
   setSpinnerFlag(true);
   //after fetching the results from the db if the data fails the spinner should stop
   setTimeout(() => setSpinnerFlag(false), 2000);
  }
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submitHandler)} className="w-full  flex flex-col m-0">
      <LoginInputContainer error={errors?.email} register={register("email")} label="Correo electronico"
      placeholder='Ingresa tu correo' autoComplete='email' />
      <LoginInputContainer error={errors?.password} register={register("password")} label="Contraseña"
      placeholder='Ingresa tu contraseña' rightIcon={unseeIcon} type="password" rightIconHandler={unseeHandler} 
      autoComplete='current-password' />

      <Link href="/recovery">
       <a className="text-sm leading-5 hover:underline text-p-color self-end mb-4" >¿Olvidates tu contraseña?</a>
      </Link>
      <LoginButton className={spinnerFlag ? 'hover:bg-secondary hover:border-secondary bg-secondary border-secondary' : undefined} type='submit' id='submitButton' >
        {spinnerFlag ? <Image className='animate-spin' src={spinner} alt={spinner} /> : 'INGRESAR'}
      </LoginButton>
    </form>
  );
}

export default LoginForm;
