import ProductCard, { Carrousell } from "components/productCard";
//temp
const productsBig = () => {
  const products = [];
  for(let i = 0; i < 10; i++){
    products.push(<ProductCard big image={require('public/home/product-big.png')} 
    description="Toaster - Lampara De Escritorio De Madera Concept Tic - Tac" stars={4}
    price="99" offerPrice="49.99"
    />
  )}
  return products;
}

export default function RecommendProducts(){
  return(
    <div className="py-29" >
      <Carrousell title="Productos recomendados" items={productsBig()} />
    </div>
  )
}