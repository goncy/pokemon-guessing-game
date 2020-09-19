import React, {ButtonHTMLAttributes} from "react";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "primary" | "success" | "warning" | "error";
  isDisabled?: boolean;
}

const Button: React.FC<Props> = ({children, type, isDisabled = false, ...props}) => {
  return (
    <button
      className={`nes-btn ${isDisabled ? `is-disabled` : type ? `is-${type}` : ``}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
