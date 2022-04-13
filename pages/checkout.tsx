import type { NextPage } from 'next'
import Head from 'next/head'
import Navegation from 'components/navegation'
import Footer from 'components/footer'
import LoginInputContainer from 'components/inputs/loginInputContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { checkoutResolver } from 'components/formSchemas'
import Checkbox from 'components/inputs/checkbox'
import { useState } from 'react'
import Link from 'next/link'
import LoginButton from 'components/buttons/loginButton'
import Image from 'next/image'
import React from 'react'

const Checkout: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <div className="w-full lg:px-20 flex justify-center " >
        <div className="max-w-[1400px] w-full pt-14 pb-26 lg:flex" >
          <div className='flex-1 border border-black' > 
            <CheckoutStep 
            form={DataForm()} />
          </div>
          <div className='flex-1 border border-black' >a</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout

const CheckoutStep = (props : {
  form : JSX.Element
}) => {
  return(
    <div className='px-27 pt-6 pb-26 w-full' >
      {props.form}
    </div>
  )
}

type dataFormInput = {
  fullname: string,
  address1: string,
  address2: string,
  zipCode: number,
  city: string,
  state: string,
  country: string,
  phoneNumber: number,
  termsAndConditions: boolean,
}


const DataForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<dataFormInput>({resolver : checkoutResolver()});
  
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const submitHandler : SubmitHandler<dataFormInput> = (data, ev) => {
    console.log(data);
    setSpinnerFlag(true);
    //after fetching the results from the db if the data fails the spinner should stop
    setTimeout(() => setSpinnerFlag(false), 2000);
  }

  const [useChecked, setUseChecked] = useState(false)
  const toggleChecked = () => setUseChecked(prev => !prev)
  return(
    <form className="w-full  flex flex-col m-0 " >
      <LoginInputContainer label="Nombre completo" placeholder="Ingresa tu nombre completo"
       register={register('fullname')} error={errors?.fullname} autoComplete='name' />
      <LoginInputContainer label="Linea de dirección 1" placeholder="Ingresa tu dirección"
       register={register('address1')} error={errors?.address1} autoComplete='address' />
      <LoginInputContainer label="Linea de dirección 2" placeholder="Ingresa tu dirección"
       register={register('address2')} error={errors?.address2} autoComplete='address' />
      <div className='lg:flex w-full lg:justify-between' >
        <LoginInputContainer label="Código postal" placeholder="Ej. 09980"
        register={register('zipCode')} error={errors?.zipCode}  />
        <LoginInputContainer label="Ciudad" placeholder="Ej. Sevilla"
        register={register('city')} error={errors?.city}  />
      </div>
      <div className='lg:flex w-full lg:justify-between' >
        <LoginInputContainer label="Estado/provincia" placeholder="Ej. Madrid"
        register={register('state')} error={errors?.state}  />
        <LoginInputContainer label="Pais" placeholder="Ej. España"
        register={register('country')} error={errors?.country} value="España" />
      </div>
      <LoginInputContainer label="Número de teléfono" placeholder="Ingresa tu numero"
       register={register('phoneNumber')} error={errors?.phoneNumber} />

      <div className="flex mt-2 mb-4 cursor-pointer"  >
        <Checkbox onClick={toggleChecked} register={register("termsAndConditions")} checked={useChecked} />
        <p className="text-xs leading-4 tracking-wide mb-6" >Al crear una cuenta, aceptas las&nbsp;
          <Link href="/terms"><a className="text-secondary hover:underline" >Condiciones de Uso</a></Link>
          &nbsp;y el&nbsp;
          <Link href="/terms"><a className="text-secondary hover:underline" >Aviso de Privacidad</a></Link>
          &nbsp;de AliOlam</p>
      
      </div>
      <LoginButton type="submit" >{spinnerFlag ? <Image className='animate-spin' src={require('public/spinner.svg')} alt={'spinner'} /> : 'Continuar'}</LoginButton>
    </form>
  )
}
