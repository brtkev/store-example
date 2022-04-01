import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../formSchemas";

import LoginInputContainer from "../inputs/loginInputContainer";
import { unseeHandler } from "../inputs/loginInput/handlers";
import Checkbox from "../inputs/checkbox";
import LoginButton from "../buttons/loginButton";

import unseeIcon from '../../public/unsee-icon.svg'
import spinner from "../../public/spinner.svg"




type registerInput = {
  name: string, email : string, password : string, passwordConfirm : string, subscription : boolean
}

const passwordInputProps = {
  type : 'password',
  rightIcon : unseeIcon,
  rightIconHandler : unseeHandler
}
export default function RegisterForm(){
  const { register, handleSubmit, formState: { errors } } = useForm<registerInput>({resolver : yupResolver(registerSchema)});
  
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const submitHandler : SubmitHandler<registerInput> = (data, ev) => {
    console.log(data);
    setSpinnerFlag(true);
    //after fetching the results from the db if the data fails the spinner should stop
    setTimeout(() => setSpinnerFlag(false), 2000);
  }

  const [useDisabled, setUseDisabled] = useState(true);
  const passwordObserver : React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    if(ev.target.value) setUseDisabled(false);
    else setUseDisabled(true);
  }

  const [useChecked, setUseChecked] = useState(false);
  

  return(
    <form onSubmit={handleSubmit(submitHandler)} className="w-full  flex flex-col m-0 " >
      <LoginInputContainer label="Nombre completo" placeholder="Ingresa tu nombre"
       register={register('name')} error={errors?.name} autoComplete='name' />
      <LoginInputContainer label="Correo electrónico" placeholder="Ingresa tu correo"
       register={register('email')} error={errors?.email} autoComplete='email' />
      <LoginInputContainer label="Contraseña" placeholder="Como mínimo 8 caracteres"
       onChange={passwordObserver} register={register('password')} error={errors?.password}
       autoComplete='new-password' {...passwordInputProps} />
      <LoginInputContainer label="Repite tu contraseña" placeholder=""
       register={register('passwordConfirm')} error={errors?.passwordConfirm} {...passwordInputProps} disabled={useDisabled} />

      <div className="flex mt-2 mb-4 cursor-pointer" onClick={() => setUseChecked((prev) => !prev)} >
        <Checkbox register={register("subscription")} checked={useChecked} />
        <p className="text-base leading-6 tracking-wider text-title-color" >Suscríbase para recibir ofertas y descuentos exclusivos por correo electrónico.</p>
      </div>
      <p className="text-xs leading-4 tracking-wide mb-6" >Al crear una cuenta, aceptas las&nbsp;
        <Link href="/terms"><a className="text-secondary hover:underline" >Condiciones de Uso</a></Link>
        &nbsp;y el&nbsp;
        <Link href="/terms"><a className="text-secondary hover:underline" >Aviso de Privacidad</a></Link>
        &nbsp;de AliOlam</p>
      <LoginButton type="submit" >{spinnerFlag ? <Image className='animate-spin' src={spinner} alt={spinner} /> : 'INSCRIBIRSE'}</LoginButton>
    </form>
  );
}