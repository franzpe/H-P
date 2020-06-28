import React, { FC } from 'react';
import cx from 'classnames';

import MaterialIcon from '../MaterialIcon';
import { wrap } from 'module';

type Props = {
  wrapperClassName?: string;
  error?: string;
} & React.HTMLProps<HTMLInputElement>;

const Input: FC<Props> = ({
  wrapperClassName,
  id,
  className,
  error,
  value,
  label,
  placeholder = ' ',
  ...restProps
}) => {
  return (
    <div
      className={cx(
        'outline relative border border-primary-1-tint focus-within:border-accent-shade rounded-lg mb-4',
        wrapperClassName,
        {
          ['border-primary-2-shade']: value,
          ['border-error']: error
        }
      )}
    >
      <input
        id={id}
        placeholder={placeholder}
        className="block px-4 py-2 w-full text appearance-none focus:outline-none bg-transparent rounded-lg text-primary-2-shade"
        {...restProps}
      />
      {label && (
        <label
          htmlFor={id}
          className={cx(
            'absolute top-0 bg-white px-2 mx-2 py-2 -z-1 duration-300 origin-0 text-primary-1-tint focus:text-primary-2-shade',
            { ['font-bold text-primary-2-shade']: value, ['font-bold text-error']: error && value }
          )}
        >
          {label}
        </label>
      )}
      {error && (
        <span className="absolute left-1 mt-1 ml-2 text-error text-xs flex flex-row items-center">
          <MaterialIcon className="text-xs mr-1 ">error</MaterialIcon>
          Please fill out this field.
        </span>
      )}
    </div>
  );
};

export default Input;
