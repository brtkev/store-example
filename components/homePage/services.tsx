  import Image from "next/image";


const classes = {
  iconContainer : "mr-2",
  card : "lg:flex-1 md:w-1/2 w-full flex justify-start items-center h-16 min-w-max cursor-pointer hover:bg-background lg:mr-4",
}

export default function Services(){
  return(
    <div className="relative flex w-full items-center flex-wrap lg:px-20 px-4" >
      <div className={classes.card} >
        <div className={classes.iconContainer} ><Image height={32} width={32} src={require('public/home/icon/refresh.png')} /></div>
        Economía Circular
      </div>
      <div className={classes.card} >
        <div className={classes.iconContainer} ><Image height={32} width={32} src={require('public/home/icon/user-group.png')} /></div>
        Apoyo a emprendedores</div>
      <div className={classes.card} >
        <div className={classes.iconContainer} ><Image height={32} width={32} src={require('public/home/icon/shield-check.png')} /></div>
        Pago 100% seguro</div>
      <div className={classes.card} >
        <div className={classes.iconContainer} ><Image height={32} width={32} src={require('public/home/icon/badge-check.png')} /></div>
        Productos certificados</div>
    </div>
  )
}