// component/cardTwoTextColumns.tsx
import Image from 'next/image';

export default function CardTwoTextColumns(props: {
  id: any;
  title1: string;
  title2: string;
  paragraph1: string;
  paragraph2: string;
  textOrder: string;
}) {
  return (
    <>
      <div className={`grid lg:px-16 py-16 justify-items-center bg-primary my-28 w-full `} >
        <div id={`card2Columns${props.id}`} className={`grid max-w-screen-xl py-24 px-4 gap-x-8 sm:py-0 md:w-[80%] `} >
          <div className={`grid order w-full content-center justify-items-center`}>
            <h2 className="my-4 text-center text-4xl font-bold text-white lg:text-left">
              {props.title1}
            </h2>
            <p className="my-2 text-center lg:text-left text-white ">{props.paragraph1}</p>
          </div>

          <div className={`grid content-center justify-self-center textOrder`}>
            <h2 className="my-4 text-center text-4xl font-bold text-white  ">
              {props.title2}
            </h2>
            <p className="my-2 text-center lg:text-left text-white ">{props.paragraph2}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          #card2Columns1 {
            grid-template-columns: 50% minmax(50%, 1fr);
          }
          #card2Columns2 {
            grid-template-columns: 50% minmax(50%, 1fr);
          }
          #card2Columns1 .order  {
            order: ${props.imagenOrder};
          }
          #card2Columns2 .order {
            order: ${props.imagenOrder};
          }
          #card2Columns2 .textOrder {
            order: ${props.textOrder};
          }
        }
      `}</style>
    </>
  );
}
