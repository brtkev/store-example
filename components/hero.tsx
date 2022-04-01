// pages/Hero.tsx
import Image from 'next/image';
import PictureHero from '../public/assets/img/backgroundAboutHero.jpg';
export default function Hero() {
  return (
    <>
      <div className="block w-full h-[472px]">
        <picture className="block h-max overflow-hidden md:hidden lg:hidden xl:hidden"  >
          <Image src={PictureHero} width={2112} height={2748} className="sm:rotate-90 md:hidden lg:hidden xl:hidden" layout="responsive" priority />
        </picture>
        <picture className="block h-[472px] overflow-hidden sm:hidden md:block">
          <Image src={PictureHero} width={2748} height={2112} className="sm:hidden object-contain  md:block" layout="responsive" priority />
        </picture>

      </div>

      <div className="h-[472px] heroGradient absolute w-full">
        <div className="grid justify-items-center max-w-screen-xl h-full items-center sm:items-start pl-8 sm:px-2 md:content-center md:justify-items-start md:pl-8">
          <div className="max-w-full md:max-w-[50%] h-full">
            <p className="text-title-yellow font-bold sm:text-center md:text-left sm:mt-4 ">Familia AliOlam</p>
            <h2 className="text-white text-[34px] font-bold leading-[120%] my-6 sm:text-center md:text-left">
              “Si estás aquí, ya eres parte del cambio en el mundo”
            </h2>
            <p className="text-white sm:text-center md:text-left">
              En AliOlam creamos propósito y significado en lo que hacemos, el 51%
              de nuestras ganancias seran donadas a fundaciones que ayudan al
              medio ambiente.
            </p>
          </div>
        </div>

      </div>
      <style jsx>{`
        .heroGradient {
          background: linear-gradient(90deg, #669D82 47.26%, rgba(77, 113, 70, 0) 100%, rgba(102, 158, 130, 0) 100%);
        }
        @media  (max-width: 767px) {
          .heroGradient {
          background: linear-gradient(180deg, #669D82 60%, rgba(77, 113, 70, 0) 100%, rgba(102, 158, 130, 0) 100%);
        }

        }
        `}</style>
    </>
  );
}
