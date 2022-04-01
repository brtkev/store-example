// component/card2Columns.tsx
import Button from 'components/buttons/button';
import Image from 'next/image';


export default function CardImgColumns(props: {
  id: any;
  backgroundColor: string;
  question: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  pictureSrc: string;
  imagenOrder: string;
  textOrder: string;
  buttonText?: string;
}) {
  return (
    <>
      <div className={`grid min-h-[700px] lg:px-16 py-16 justify-items-center w-full`} style={{ background: props.backgroundColor }} >
        <div id={`card2Columns${props.id}`} className={`grid max-w-screen-xl lg:gap-24 md:justify-items-center md:w-[80%]`} >
          <div className={`grid order w-full content-center justify-items-center  `}>
            <picture
              className={`block h-max w-full overflow-hidden rounded-2xl px-2 sm:mb-8  `}
            >
              <Image
                src={props.pictureSrc}
                width={524}
                height={556}
                className=""
                layout="responsive"
              />
            </picture>
          </div>

          <div className={`grid content-center justify-self-center px-2 textOrder`}>
            <h3 className="text-center font-bold text-title-yellow lg:text-left">
              {props.question}
            </h3>
            <h2 className="my-4 text-center text-4xl font-bold lg:text-left">
              {props.title}
            </h2>
            <p className="my-2 text-center lg:text-left">{props.paragraph1}</p>
            <p className="my-2 text-center lg:text-left">{props.paragraph2}</p>
            <p className="my-2 text-center lg:text-left">{props.paragraph3}</p>
            {props.buttonText &&
             <Button className={`px-10 w-max justify-self-center ${props.textOrder === "1" ? 'lg:justify-self-start' : "lg:justify-self-end"}`} >
               <p className='text-white' >{props.buttonText}</p>
              </Button>}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          #card2Columns1 {
            grid-template-columns: 60% minmax(40%, 1fr);
          }
          #card2Columns2 {
            grid-template-columns: 40% minmax(60%, 1fr);
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
