import React, { FC } from 'react';
import cx from 'classnames';

type Props = {
  wrapperClassName?: string;
  iconClassName?: string;
} & React.HTMLProps<HTMLInputElement>;

const RadioButton: FC<Props> = ({ wrapperClassName, iconClassName, label, id, ...restProps }) => {
  return (
    <div className={cx('flex items-center mr-2 mb-6', wrapperClassName)}>
      <input id={id} type="radio" name="radio" className="hidden" checked {...restProps} />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <span
          className={cx('w-6 h-6 inline-block mr-1 rounded-full border-2 border-primary-1-shade', iconClassName)}
        ></span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
