import Image from "next/image";


//this gotta be implemented with js to accept a list of items (images)
//and it should be able to move between them as a slideshow should
export default function Slideshow( props :{
  className?: string;
  imageSrc : any;
}){
  const activeButtonClass = "bg-primary"
  const inactiveButtonClass = "bg-gray-400"
  const spacingBetweenButtons = "mr-3"

  return(
    <div className={"w-full " + props.className} >
      <div className="w-full mb-4 rounded-lg flex justify-center" >
        <Image src={props.imageSrc} width={632} height={424} />
      </div>
      <div className="w-full flex justify-center">
        <div className={["relateive h-3 w-3 rounded-full cursor-pointer", activeButtonClass, spacingBetweenButtons].join(" ")} ></div>
        <div className={["relateive h-3 w-3 rounded-full cursor-pointer", inactiveButtonClass, spacingBetweenButtons].join(" ")} ></div>
        <div className={["relateive h-3 w-3 rounded-full cursor-pointer", inactiveButtonClass, spacingBetweenButtons].join(" ")} ></div>
        <div className={["relateive h-3 w-3 rounded-full cursor-pointer", inactiveButtonClass, spacingBetweenButtons].join(" ")} ></div>
        <div className={["relateive h-3 w-3 rounded-full cursor-pointer", inactiveButtonClass].join(" ")} ></div>
      </div>

    </div>
  )
}