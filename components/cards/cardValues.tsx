// component/cardValues.tsx
import Image from 'next/image';

export default function CardValues(props: {
  id: any;
  title: string;
}) {
  return (
    <>
      <div className={`grid lg:px-16 py-16 justify-items-center bg-background mb-28 w-full `} >
        <div id={`cardRowCars{props.id}`} className={`grid max-w-screen-xl py-20 px-4 gap-x-8 sm:py-0 w-full `} >
          <h2 className="my-4 text-center text-4xl font-bold text-title-color lg:text-center">
            {props.title}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:auto-cols-auto">
            <div className="bg-white max-w-[416px] w-full min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/groupHands.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Unidad</h3>
              <p>En AliOlam creemos que todos somos uno, unidos para un mayor servicio al mundo.</p>
            </div>
            <div className="bg-white w-full max-w-[416px] min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/plant.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Amor al planeta</h3>
              <p>En AliOlam donamos el 51% de nuestros ingresos de ventas a proyectos ecológicos y fundaciones.</p>
            </div>

            <div className="bg-white w-full max-w-[416px] min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/heartInHand.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Precios justos</h3>
              <p>Ofrecemos productos con precios orientados a la equidad de ingresos y precios justos.</p>
            </div>
            <div className="bg-white w-full max-w-[416px] min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/security.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Integridad</h3>
              <p>Vivimos de acuerdo con nuestros valores más profundos actuando como predicamos, para guiar e inspirar a otros.</p>
            </div>
            <div className="bg-white w-full max-w-[416px] min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/hands.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Transparencia y Confianza</h3>
              <p>En AliOlam nuestros clientes y el medio ambiente son prioridad, y siempre estaremos trabajando para su bienestar.</p>
            </div>
            <div className="bg-white w-full max-w-[416px] min-h-[256px] p-[24px]">
              <picture className='block w-12 h-12'>
                <Image src="/assets/icons/about/world.png" width={48} height={48} layout="responsive" />
              </picture>
              <h3 className='text-secondary text-2xl font-bold mt-5 mb-4'>Servicios</h3>
              <p>AliOlam está orientado a satisfacer las necesidades de consumo ecológico de nuestra comunidad y a conectarnos para unidos servir al mundo.</p>
            </div>



          </div>

        </div>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  );
}
