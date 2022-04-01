import React, { ButtonHTMLAttributes } from "react";

const LoginButton = React.forwardRef((props : ButtonHTMLAttributes<HTMLButtonElement>, ref) => {
  const {className, children, ...buttonProps} = props;
  const defaultColors = `bg-secondary hover:bg-white hover:text-title-color
  hover:border-p-color border-secondary text-white`;
  const defaultClassName = `w-full rounded p-4 text-sm leading-4 tracking-wider border ${className ? className : defaultColors}`
  return(
    <button className={defaultClassName} {...buttonProps} ref={ref as React.LegacyRef<HTMLButtonElement>} >
      {children}
    </button>
  );
})

export default LoginButton;