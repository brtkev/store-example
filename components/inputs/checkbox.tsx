import React from 'react';
import Image from "next/image";
import checkIcon from '../../public/check-icon.svg';
import { UseFormRegisterReturn } from "react-hook-form";

const checkboxHandler = (ev : React.ChangeEvent<HTMLInputElement>) => {
  const div = ev.target.parentElement;
  const classNames = 'bg-primary'
  if(ev.target.checked){
    div?.classList.add(classNames);
  }else{
    div?.classList.remove(classNames);
  }
}

interface checkboxIf extends React.InputHTMLAttributes<HTMLInputElement>{
  register: UseFormRegisterReturn;
}

export default function Checkbox(props : checkboxIf){
  const {register, ...rest} = props;
  const className = "flex shrink-0 items-center justify-center w-6 h-6 mr-2 border border-input-border-color rounded bg-white cursor-pointer";

  return(
    <div className={className + (props.checked ? ' bg-primary' : '') } >
        <input type="checkbox" className="w-6 h-6 opacity-0 absolute z-10 cursor-pointer" 
        {...register} {...rest} onChange={checkboxHandler} />
        <Image src={checkIcon} alt="checkIcon" className={"cursor-pointer" + (props.checked ? '' : ' opacity-0') } />
    </div>
  );
}