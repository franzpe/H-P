import React, { FC } from 'react';
import Button, { ButtonProps } from './Button';
import cx from 'classnames';

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
    ></Button>
  );
};

export default OrangeButton;
