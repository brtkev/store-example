import React from "react"

export default function Button( {children, className,...props} : React.ButtonHTMLAttributes<HTMLButtonElement>){
  return(
    <button className={["bg-secondary h-12 p-3 rounded-lg flex justify-center items-center",
     className].join(' ')} {...props} >
    {children}
    </button>
  )
}