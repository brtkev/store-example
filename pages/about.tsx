// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Navegation from '../components/navegation';
import Hero from 'components/hero';
import CardImgColumns from '../components/cards/cardImgColumns';
import cardTwoTextColumns from '../components/cards/cardTwoTextColumns';
import CardTwoTextColumns from '../components/cards/cardTwoTextColumns';
import CardValues from 'components/cards/cardValues';
import Footer from 'components/footer';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navegation />
      <Hero />
      <CardImgColumns
        id={'1'}
        backgroundColor={'#ffffff'}
        question={'¿Quienes somos?'}
        title={'Bienvenido a AliOlam.'}
        paragraph1={'AliOlam es un Eco-Marketplace Global de suscripción gratuita de ventas online, que nace con la intención de unir y construir puentes entre Eco-emprendedores y consumidores en el mundo, creando un impacto de conciencia ecológica que trascienda en el tiempo, asegurandoles un mundo mejor a las futuras generaciones.'}
        paragraph2={'Esta iniciativa digital tiene como meta crear una comunidad ecológica global además de apoyar a las marcas a través de una inversión publicitaria significativa y creando alianzas con ONG ‘s dedicadas a apoyar a estos eco-emprendedores en su proceso de desarrollo.'}
        paragraph3={'Desde AliOlam invitamos a todos los Emprendedores y Empresarios enfocados en productos sustentables, a unirse para expandir sus marcas y productos e incrementar sus ganancias con nosotros, convirtiéndote en un AliOlamer que sirve al planeta.'}
        pictureSrc={'/assets/img/pictureQuienes.jpg'}
        textOrder={'1'}
        imagenOrder={'2'} />

      <CardImgColumns
        id={'2'}
        backgroundColor={'#F4F4F4'}
        question={'¿Que servicios ofrecemos?'}
        title={'Nuestros productos son los mejores del mercado.'}
        paragraph1={'Nuestro dedicado equipo recorre el planeta para traerte los mejores productos líderes en los rubros y en la industria ecofriendly que podemos encontrar. Productos orgánicos y éticos para satisfacer la demanda de consumidores, y que a la vez apoya directamente a pequeñas empresas, fabricantes independientes y artesanos de todo el mundo.'}
        paragraph2={'Nos aseguraremos de que cada producto mostrado en AliOlam, sea sometido a un estudio profundo, para garantizar que la producción se haga bajo los estándares de calidad en materiales, y con garantía de certificación ecológica, sustentable, libre de crueldad animal, orgánico y con certificado de comercio.'}
        paragraph3={'Promovemos el envío comercial del eco-emprendedor proporcionando oportunidades de negocio a millones de personas que deseen iniciar su Eco.-Store online con una suscripción sin membresía. Satisfacción garantizada a nuestros clientes.'}
        pictureSrc={'/assets/img/pictureServicio.jpg'}
        textOrder={'2'}
        imagenOrder={'1'} />
      <CardTwoTextColumns
        id={'1'}
        title1={'VISION'}
        title2={'MISION'}
        paragraph1={'Convertirnos en la primera plataforma que lidera el cambio en la industria del comercio ecológico al tiempo que respalda el éxito de los eco empresarios que empoderan a las empresas y marcas con los más altos estándares sostenibles.'}
        paragraph2={'Unir y conectar una comunidad global de eco empresarios a través de nuestra plataforma de comercio ecológico para promover un estilo de vida sostenible y salvar el planeta para las generaciones futuras.'}
        textOrder={''} />

      <CardValues
        id={1}
        title={'Nuestros Valores'} />
      <Footer />
    </div>
  );
};

export default Home;
