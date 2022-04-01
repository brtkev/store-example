import React, {useState ,InputHTMLAttributes, MouseEventHandler, SetStateAction } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Image from 'next/image';

const inputFocusHandle = (ev: React.FocusEvent, setIsFocus : React.Dispatch<SetStateAction<boolean>>, setHasValue : React.Dispatch<SetStateAction<boolean>>) => {
	const parent = ev.target.parentElement as HTMLInputElement
	const input = ev.target as HTMLInputElement
	if (ev.type === 'focus') {
		setIsFocus(true);
	}
	if (ev.type === 'blur' ){
		setIsFocus(false);
		if(input.value !== '') {
			setHasValue(true)
		}else setHasValue(false);
	}
}

export interface LoginInputInterface extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegisterReturn;
	error: FieldError | undefined;
	rightIcon?: string | undefined;
	rightIconHandler?: MouseEventHandler<HTMLImageElement>;
	label? : string;
}

const LoginInput = (props : LoginInputInterface) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [hasValue, setHasValue] = useState<boolean>(false);
	const { register, error, rightIcon, rightIconHandler, onFocus, onBlur,  ...inputProps } = props;
	const inputBackgroundClass = (hasValue && !isFocus ? 'bg-input-disabled-color' : 'bg-background sm:bg-white') ;
	const errorStyle = error ? 'focus:border-error border-error' :
	 isFocus ? 'border-title-color': 'border-input-border-color'
	const disabledStyle = props.disabled ? 'bg-input-disabled-color cursor-not-allowed' : '';

	const inputClassName = `p-3 border-solid border rounded outline-0 ${inputBackgroundClass}` 
	
	return (
		<div className={`flex  ${inputClassName} ${errorStyle} ${disabledStyle}`}>
			<input {...register} className={`flex-1 border-0 outline-0 
			${inputBackgroundClass} ${disabledStyle}`}
				onFocus={(ev) => {inputFocusHandle(ev, setIsFocus, setHasValue); if(onFocus) onFocus(ev)}}
				onBlur={(ev) => {inputFocusHandle(ev, setIsFocus, setHasValue); if(onBlur) onBlur(ev)}}
				{...inputProps} />
			{rightIcon ? <Image onClick={rightIconHandler} src={rightIcon} alt="unsee icon" className='self-end hover:cursor-pointer' ></Image> : null}
		</div>
	);
}
export default LoginInput;