import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import Title from '../components/LoginPage/title'
import RegisterForm from '../components/registerPage/registerForm';

const Register: NextPage = () => {
	

	return (
		<div className='flex relative max-w-full min-h-screen box-border flex-col items-center justify-center bg-background sm:p-14 p-0 m-0 ' >
			<Head>
        <title>register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div className="shadow-md relative sm:w-480 w-full box-border max-w-full sm:bg-white bg-background sm:rounded-3xl rounded-none py-8 px-4 sm:px-8 flex flex-col items-center" >
				<Title text='Crear Cuenta' />
				<RegisterForm />
				<div className='text-sm leading-5 flex mt-8'>
					<p className='mx-1 text-p-color text-sm' >¿Ya tienes cuenta?</p>
					<Link href="/login" ><a className='text-title-color text-sm font-medium hover:underline'>
						Iniciar sesión.</a></Link>
				</div>
			</div>
		</div>
	);
}

export default Register;