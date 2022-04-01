import Image from "next/image";

type colProps = {
  title: string,
  items: Array<string> | Array<{ icon : any, text: string}>
}
const Col = ({title, items} : colProps) => {

  const rows = () => {
    if(items){
      const rowsArr : Array<React.ReactNode> = [];
      items.forEach((item, i) => {
        if(typeof item === "string") rowsArr.push(
          <div key={i} className="cursor-pointer h-11 px-2 flex items-center" >
            <p className="text-white text-sm">{item}</p>
          </div>
        )
        else rowsArr.push(
          <div key={i} className="cursor-pointer h-11 px-2 flex items-center" >
            {item.icon && <Image width={16} height={16} src={item.icon} />}
            <p className="text-white text-sm ml-2">{item.text}</p>
          </div>
        )
      })
      return rowsArr;
    }
  }

  return(
    <div className="flex flex-col flex-1 mb-7 lg:w-auto w-full lg:items-start items-center" >
      <h6 className="text-white text-semibold text-sm mb-4 lg:border-none border-y border-white lg:w-auto w-full text-center lg:py-0 py-2" >{title}</h6>
      
      {rows()}
      
    </div>
  )
}

type tableProps = {
  items: Array< { title : string, items : Array<string> | Array<{ icon : any, text: string}> } >
}
const Table = ({items} : tableProps) => {

  return(
    <div className=" flex lg:w-4/6 w-full lg:flex-row flex-col lg:items-start items-center" >
      {items.map( (colData, i) => <Col key={i} {...colData} /> )}
    </div>
  )
}
export default Table;

