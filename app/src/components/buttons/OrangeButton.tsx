import React, { FC } from 'react';
import cx from 'classnames';

import Button, { ButtonProps } from './Button';

type FontType = 'medium' | 'heavy';

type Props = {
  fontType?: FontType;
  py?: number;
} & ButtonProps;

const OrangeButton: FC<Props> = ({ className, fontType = 'heavy', py = 2, ...restProps }) => {
  return (
    <Button
      className={cx(
        `text-white bg-accent-orange hover:bg-accent-shade font-avenir-${fontType} py-${py} `,
        className
      )}
      {...restProps}
    />
  );
};

export default OrangeButton;
