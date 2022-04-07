import React from "react"

export default function Button( {children, className,...props} : React.ButtonHTMLAttributes<HTMLButtonElement>){
  return(
    <button className={["h-12 p-3 rounded-lg flex justify-center items-center",
     className, props.disabled ? 'bg-gray-200' : 'bg-secondary '].join(' ')} {...props} >
    {children}
    </button>
  )
}