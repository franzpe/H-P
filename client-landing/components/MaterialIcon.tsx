import React, { FC, HTMLProps } from 'react';
import cx from 'classnames';

import { MaterialIconType } from '../types/common';

const getMaterialClass = (type: MaterialIconType): string => {
  switch (type) {
    case MaterialIconType.Outlined:
      return 'material-icons-outlined';
    case MaterialIconType.TwoTone:
      return 'material-icons-two-tone';
    case MaterialIconType.Round:
      return 'material-icons-round';
    case 'sharp':
      return MaterialIconType.Sharp;
    default:
      return '';
  }
};

type Props = {
  type?: MaterialIconType;
} & HTMLProps<HTMLElement>;

const MaterialIcon: FC<Props> = ({ children, type, className, ...restProps }) => {
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
