import React, { cloneElement, FC } from 'react';
import cx from 'classnames';

import styles from './Tabs.module.css';

type Props = {
  active?: number;
  className?: string;
};

const Tabs: FC<Props> = ({ children, active = 0, className, ...restProps }) => {
  return (
    <ul className={cx(styles.tabs, className)} {...restProps}>
      {React.Children.map(children, (child, index) => {
        return child && cloneElement(child as any, {});
      })}
    </ul>
  );
};

export default Tabs;
