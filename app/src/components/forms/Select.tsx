import React, { FC } from 'react';
import cx from 'classnames';
import RSelect, { Props, OptionTypeBase } from 'react-select';

const Select: FC<Props<OptionTypeBase>> = ({ className, value, id, inputId, instanceId, ...restProps }) => {
  return (
    <RSelect
      id={id}
      instanceId={instanceId || id}
      inputId={inputId || id}
      value={value}
      className={cx('react-select-container ', className, { ['react-select-container-w-value']: value })}
      {...restProps}
    />
  );
};

export default Select;
