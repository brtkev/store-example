import Categories from "./categories";
import Welcome from "./welcome";
import Services from "./services";
import Featured from './featured';
import Products from "./products";
import MakeEcoStore from "./makeEcoStore";
import NewProducts from "./newProducts";
import React from "react";

const MaxWidthDiv = (props : React.HTMLAttributes<HTMLDivElement>) => {
  return(
    <div className={"w-full flex flex-col items-center " + props.className}>
      <div  className="max-w-[1500px] w-full">{props.children}</div>
    </div>
  )
}

export default function Body(){
  return(
  <div className="flex flex-col items-center " >
    <MaxWidthDiv>
      <Welcome />
      <Services />
    </MaxWidthDiv>
    <MaxWidthDiv className="bg-background">
      <Categories />
      <Featured />
      <Products />
    </MaxWidthDiv>
    <MaxWidthDiv className="bg-primary">
      <MakeEcoStore />
    </MaxWidthDiv>
    <MaxWidthDiv>
      <NewProducts />
    </MaxWidthDiv>
  </div>
  )
}
//comprar ahora
//unete al cambio
