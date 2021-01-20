import React, { FC, HTMLProps } from 'react';
import cx from 'classnames';

import { MaterialIconType } from '../../types';

const getMaterialClass = (type: MaterialIconType): string => {
  switch (type) {
    case 'outlined':
      return 'material-icons-outlined';
    case 'two-tone':
      return 'material-icons-two-tone';
    case 'round':
      return 'material-icons-round';
    case 'sharp':
      return 'material-icons-sharp';
    default:
      return '';
  }
};

type Props = {
  type?: MaterialIconType;
} & HTMLProps<HTMLElement>;

const MaterialIcon: FC<Props> = ({ children, type = '', className, ...restProps }) => {
  return (
    <i
      className={cx('material-icons', className, {
        [getMaterialClass(type)]: type
      })}
      {...restProps}
    >
      {children}
    </i>
  );
};

export default MaterialIcon;
