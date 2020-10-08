import React, { FC } from 'react';
import cx from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, ...restProps }) => {
  return (
    <button className={cx('rounded-full text-center disabled:bg-primary-1-tint', className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
