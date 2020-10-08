import React, { FC } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import cx from 'classnames';

import styles from './Tab.module.css';

type Props = {
  wrapperClassName?: string;
} & LinkProps;

const Tab: FC<Props> = ({ children, wrapperClassName, to, ...linkProps }) => {
  const location = useLocation();

  return (
    <li className={cx(styles.tab, wrapperClassName, { [styles.active]: to === location.pathname })}>
      <Link to={to} {...linkProps}>
        {children}
      </Link>
    </li>
  );
};

export default Tab;
