import Button from "components/buttons/button";
import Image from "next/image";

const classes = {
  contentBox : "flex flex-col items-center flex-1 lg:w-auto min-w-[300px] mb-10 mx-4",

}

export default function MakeEcoStore(){
  return(
    <div className="w-full lg:py-24 py-14 bg-primary lg:px-20 px-4 flex flex-col justify-center items-center" >
      <h1 className="text-3xl text-bold text-white mb-14 text-center" >Crea tu Eco-Tienda de manera sencilla</h1>

      <div className="flex w-full justify-between mb-4 flex-wrap " >
        <div className={classes.contentBox} >
          <div>
            {/* <Image className="mb-4" width={22} height={56} src={require('public/home/icon/1.png')} /> */}
            <p className="text-secondary text-6xl text-bold mb-4" >1</p>
          </div>
          <h3 className="text-white text-2xl text-bold mb-4" >Personaliza tu tienda.</h3>
          <p className="text-white text-base text-[#fffb] text-center">Comienza agregando tu logo,redes sociales y conectate con nuestra magnifica comunidad.</p>

        </div>
        <div className={classes.contentBox} >
          <div>
            {/* <Image className="mb-4" width={22} height={56} src={require('public/home/icon/2.png')} /> */}
            <p className="text-secondary text-6xl text-bold mb-4" >2</p>
          </div>
          <h3 className="text-white text-2xl text-bold mb-4" >Ingresa tus productos.</h3>
          <p className="text-white text-base text-[#fffb] text-center">Descríbe tus productos e incluye tus mejores fotos.</p>
        </div>
        <div className={classes.contentBox} >
          <div>
            {/* <Image className="mb-4" width={22} height={56} src={require('public/home/icon/3.png')} /> */}
            <p className="text-secondary text-6xl text-bold mb-4" >3</p>
          </div>
          <h3 className="text-white text-2xl text-bold mb-4" >Gestiona tus ingresos</h3>
          <p className="text-white text-base text-[#fffb] text-center">Podras visualizar de manera sencilla todos los movimientos,pedidos y ganancias.</p>
        </div>

      </div>

      <Button className="text-white px-10" >Crear Eco-Tienda</Button>
      
    </div>
  )
}