import React from 'react';
import cx from 'classnames';

import MaterialIcon from '../MaterialIcon';

export type InputProps = {
  wrapperClassName?: string;
  error?: string;
  icon?: string;
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  marginBottom?: number;
} & React.HTMLProps<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapperClassName,
      id,
      className,
      error,
      value,
      label,
      icon,
      onIconClick,
      onBlur,
      placeholder = ' ',
      marginBottom = 6,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={cx(
          `outline relative border border-primary-1-tint focus-within:border-accent-shade rounded-lg mb-${marginBottom} text-left`,
          wrapperClassName,
          {
            'border-primary-2-shade': value,
            'border-error': error,
            'pr-8': icon
          }
        )}
      >
        <input
          ref={ref}
          value={value}
          id={id}
          placeholder={placeholder}
          className="block px-4 py-2 w-full text appearance-none focus:outline-none bg-transparent rounded-lg text-primary-2-shade placeholder-primary-1-tint"
          onBlur={onBlur}
          {...restProps}
        />
        {label && (
          <label
            htmlFor={id}
            className={cx(
              'absolute top-0 bg-white px-2 mx-2 py-2 -z-1 duration-300 origin-0 text-primary-1-tint focus:text-primary-2-shade ',
              { 'font-bold text-primary-2-shade': value, 'font-bold text-error': error && value }
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <span className="absolute left-1 mt-0 ml-2 text-error text-xs flex flex-row items-center">
            <MaterialIcon className="text-xs mr-1 ">error</MaterialIcon>
            {error}
          </span>
        )}
        {icon && (
          <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-2 top-0">
            {onIconClick ? (
              <button onClick={onIconClick}>
                <MaterialIcon>{icon}</MaterialIcon>
              </button>
            ) : (
              <MaterialIcon>{icon}</MaterialIcon>
            )}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
