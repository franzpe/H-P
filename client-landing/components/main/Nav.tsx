import React, { useState } from 'react';
import cx from 'classnames';

import Link from 'next/link';
import MaterialIcon from '../MaterialIcon';

import Logo from '../../assets/images/svgs/logo.svg';
import styles from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-full mx-auto max-w-screen-xxl lg:px-8 flex flex-row items-center justify-between flex-wrap">
      <div className="px-2 sm:px-8 lg:px-0 w-full h-full x lg:w-auto flex justify-between z-20 items-center bg-white">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 focus:outline-none" onClick={handleToggleMenuClick}>
            <MaterialIcon>menu</MaterialIcon>
          </button>
        </div>
      </div>
      <div
        className={cx('lg:flex lg:items-center lg:w-auto w-full z-10', styles.listWrapper, {
          [styles.open]: isMenuOpen
        })}
      >
        <ul className="lg:flex items-center justify-between text-primary-2-shade pt-0">
          <li>
            <Link href="#">
              <a className="lg:p-4 pb-3 pt-0 px-0 block font-avenir">Search Database</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="lg:p-4 py-3 px-0 block">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="lg:p-4 py-3 px-0 block">Pricing</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="#">
              <a className="lg:ml-6 lg:p-4 py-3 px-0  text-primary-2-tint">Log in</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/sign-up/info">
              <button className="ml-4 lg:ml-0 py-1 px-4 text-white rounded-full bg-primary-3-turq focus:outline-none focus:shadow-outline hover:bg-primary-3-shade">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
