import Image, {ImageProps} from 'next/image'
import Button from 'components/buttons/button'

const classes = {
  gridBox : "relative rounded-lg aspect-square w-full md:aspect-auto md:h-100 "
}
const imagesProps : ImageProps  = {
  src:'' , sizes:'100vw', objectFit:'fill', layout :'fill',
}


export default function Categories(){
  // justify-center lg:grid lg:grid-cols-[repeat(4,_minmax(0,308px))]
  //      lg:grid-rows-[repeat(2,_minmax(0,_200px))] lg:gap-4 w-full flex flex-wrap 
  // "row-start-1 row-end-3 col-start-1 col-end-3 "
  // "col-start-3 col-end-5"
  return(
    <div className="bg-background w-full lg:pt-32 pt-20 lg:px-20 px-4 flex justify-center items-center flex-col" >
      <h1 className="text-3xl text-title-color mb-12" >
        Categorias populares
      </h1>
      <div className="grid grid-cols-4 grid-rows-4  gap-4 w-full md:grid-rows-3 lg:grid-rows-2"  >
        <div className={[classes.gridBox, "row-start-1 row-end-2 col-start-1 col-end-5 ",
          "",
          "lg:row-start-1 lg:row-end-3 col-start-1 lg:col-end-3 lg:h-full"].join(" ")}>
          {BuyNowDiv("Moda Mujer")}
          <Image {...imagesProps} src={require('public/home/moda-mujer.png')}  />
        </div>
        <div className={[classes.gridBox, "row-start-2 row-end-3 col-start-1 col-end-5",
          "md:col-end-3",
          "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5"].join(" ")} >
          {BuyNowDiv("accesorios")}
          <Image {...imagesProps} src={require('public/home/accesorios.png')}/>   
        </div>
        <div className={[classes.gridBox, "row-start-3 row-end-4 col-start-1 col-end-5",
          "md:col-start-3 md:row-start-2 md:row-end-3",
          "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4"].join(" ")} >
          {BuyNowDiv("Moda hombre")}
          <Image {...imagesProps} src={require('public/home/moda-hombre.png')}/>   
        </div>
        <div className={[classes.gridBox, "row-start-4 row-end-5 col-start-1 col-end-5",
          "md:row-start-3",
          "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5"].join(" ")} >
          {BuyNowDiv("zapatos")}
          <Image {...imagesProps} src={require('public/home/zapatos.png')}/>   
        </div>
      </div>
    </div>
  )
}


const BuyNowDiv = (description : string) => <div className="absolute z-20 bottom-8 left-8 " >
    <h3 className='text-title-color text-2xl text-bold mb-7' >{description}</h3> 
    <Button><p className="text-white text-sm text-semibold" >Comprar Ahora</p></Button> 
  </div>