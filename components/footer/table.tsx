import Image from "next/image";
import { useEffect, useState } from "react";

type colProps = {
  title: string,
  items: Array<string> | Array<{ icon : any, text: string}>,
  windowSize: number
}
const Col = ({title, items, windowSize} : colProps) => {
  const [isActive, setIsActive] = useState(false);
  const rows = () => {
    if(items){
      const rowsArr : Array<React.ReactNode> = [];
      items.forEach((item, i) => {
        if(typeof item === "string") rowsArr.push(
          <div key={i} className="cursor-pointer h-11 px-2 flex items-center" >
            <p className="text-white text-sm hover:underline">{item}</p>
          </div>
        )
        else rowsArr.push(
          <div key={i} className="cursor-pointer h-11 px-2 flex items-center" >
            {item.icon && <Image width={16} height={16} src={item.icon} />}
            <p className="text-white text-sm ml-2 hover:underline">{item.text}</p>
          </div>
        )
      })
      return rowsArr;
    }
  }
  const toggleActive = () => setIsActive(prev => !prev);
  return(
    <div className="flex flex-col flex-1 mb-7 lg:w-auto w-full lg:items-start items-center" >
      <h6 onClick={toggleActive} className="cursor-pointer lg:cursor-default text-white text-semibold text-sm mb-4 lg:border-none border-y border-white lg:w-auto w-full text-center lg:py-0 py-2" >{title}</h6>
      { windowSize >= 1024 ? rows() : isActive && rows()}
      
    </div>
  )
}

type tableProps = {
  items: Array< { title : string, items : Array<string> | Array<{ icon : any, text: string}> } >
}
const Table = ({items} : tableProps) => {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth)
    const resizeHandler = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', resizeHandler);

    return(() => window.removeEventListener('resize', resizeHandler))
  })
  return(
    <div className=" flex lg:w-4/6 w-full lg:flex-row flex-col lg:items-start items-center" >
      {items.map( (colData, i) => <Col key={i} {...colData} windowSize={windowSize} /> )}
    </div>
  )
}
export default Table;

