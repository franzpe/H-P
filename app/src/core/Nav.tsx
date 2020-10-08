import React, { FC } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { AccountRoutes, Routes } from '../constants/routes';
import { useLogout } from '../libs/auth/useLogout';
import { MaterialIconType } from '../types/common';
import styles from './Nav.module.css';
import MaterialIcon from 'components/MaterialIcon';

type Props = {
  isOpen: boolean;
  onItemClick: () => void;
};

const Nav: FC<Props> = ({ isOpen, onItemClick }) => {
  const logout = useLogout();

  return (
    <nav className={cx(styles.navbar, { [styles.opened]: isOpen })}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/search" onClick={onItemClick}>
            <MaterialIcon className={styles.icon}>search</MaterialIcon>
            <span className={styles.text}>Search Database</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/candidates" onClick={onItemClick}>
            <MaterialIcon className={styles.icon} type={MaterialIconType.Outlined}>
              supervised_user_circle
            </MaterialIcon>
            <span className={styles.text}>Saved Candidates</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to={AccountRoutes.GENERAL} onClick={onItemClick}>
            <MaterialIcon className={styles.icon} type={MaterialIconType.Outlined}>
              settings
            </MaterialIcon>
            <span className={styles.text}>Account Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/Help" onClick={onItemClick}>
            <MaterialIcon className={styles.icon}>help_outline</MaterialIcon>
            <span className={styles.text}>Help & Support</span>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to={Routes.LOGIN}
            onClick={e => {
              e.preventDefault();
              onItemClick();
              logout();
            }}
            activeClassName={styles.active}
            className={styles.logout}
          >
            <MaterialIcon className={styles.icon}>exit_to_app</MaterialIcon>
            <span className={styles.text}>Log Out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
