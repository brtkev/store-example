import React from "react";

export const unseeHandler = (ev : React.MouseEvent<HTMLImageElement>) => {
  const input = ev.currentTarget.parentElement?.previousElementSibling as HTMLInputElement
  if(!input) return;
  if(input.type === 'password'){
    input.type = 'text';
  }else {
    input.type = 'password';
  }  
}