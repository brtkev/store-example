import { useState } from 'react';
import LoginInput, {LoginInputInterface} from './loginInput';

interface LoginInputContainerInterFace extends LoginInputInterface {
  label? : string;
}

export default function LoginInputContainer(props: LoginInputContainerInterFace){
  const [isFocus, setIsFocus] = useState(false);
  const { error, label } = props;
  return(
    <div className={`flex flex-col ${error ? 'mb-2' :'mb-7'}`} >
      {label ? 
      <label className={`text-base leading-6 tracking-wide ${isFocus ? 'text-terciary-p-color' : 'text-p-color'}`}>
        {label}</label>:
       null}        
      <LoginInput  {...props} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}  />
      {error ? <p className='mt-1 text-error text-xs leading-4' >{error?.message}</p> : null}
    </div>
  );
}