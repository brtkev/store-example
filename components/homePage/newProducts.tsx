import ProductCard, { Carrousell } from "components/productCard";
import Image from "next/image";
import CardImgColumns from 'components/cards/cardImgColumns';

//temp
const products = () => {
  const products = [];
  for(let i = 0; i < 10; i++){
    products.push(<ProductCard key={i} image={require('public/home/product.png')} 
    description="Blusa Con Puño Recogido" stars={4} price="$49.00" newTag offerTag />)
  }
  return products;
}

export default function NewProducts(){
  return(
    <div className="lg:py-29 py-14 lg:px-20 px-4" >
      <div className="flex flex-wrap" >
        <div className="lg:aspect-auto lg:h-60 md:h-40 relative w-full md:w-1/2 mb-10 aspect-square " >
          <Image layout="fill" objectFit="contain"  src={require('public/home/banner-add-1.png')} />
        </div>
        <div className="lg:aspect-auto lg:h-60 md:h-40 relative w-full md:w-1/2 mb-10 aspect-square" >
          <Image layout="fill" objectFit="contain"  src={require('public/home/banner-add-1.png')} />
        </div>

      </div>
      <CardImgColumns
      id={'2'}
      backgroundColor={'#ffffff'}
      question={'Compra al mayor'}
      title={'Lleva más por menos precio.'}
      paragraph1={'Deseas surtir tu tienda con nuevos productos o iniciar un nuevo emprendimiento ecologico. AliOlam te brinda la posibilidad de comprar productos al mayor con descuentos especiales.'}
      paragraph2={''}
      paragraph3={''}
      pictureSrc={'/home/man-carrying-packs.png'}
      textOrder={'2'}
      imagenOrder={'1'}
      buttonText="Comprar ahora" />
      <Carrousell title="Nuevos productos" items={products()} />
      <CardImgColumns
      id={'1'}
      backgroundColor={'#ffffff'}
      question={'CONVIÉRTETE EN OLAMBASSADOR'}
      title={'¿Amas a nuestro planeta y deseas unirte y servir al mundo?'}
      paragraph1={'AliOlam ha creado este espacio para ti, porque sabemos que ¡Unidos Servimos al Mundo! Si te apasiona tener la oportunidad de ser parte del cambio y crear un movimiento de impacto ambiental en tu comunidad y en el mundo, convirtiéndote en nuestro Embajador para representarnos globalmente como un guerrero de luz creando conciencia ambiental y ecológica.'}
      paragraph2={''}
      paragraph3={''}
      pictureSrc={'/home/people-grass.png'}
      textOrder={'1'}
      imagenOrder={'2'}
      buttonText="Unete al cambio" />
    </div>
  )
}