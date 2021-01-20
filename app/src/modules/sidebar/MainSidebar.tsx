import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Nav from 'modules/navigation/Nav';
import { ReactComponent as Logo } from 'assets/images/logo-small.svg';
import avatar from 'assets/images/JohnDoe.jpg';
import MaterialIcon from 'components/icons/MaterialIcon';
import Sidebar from './Sidebar';
import styles from './Sidebar.module.css';
import { useMainSidebar } from './SidebarContext';

const MainSidebar = () => {
  return (
    <Sidebar useOpener={useMainSidebar}>
      {({ isOpen, onOpen, onClose }) => (
        <>
          {!isOpen && (
            <MaterialIcon type="round" className={styles.hamburger} onClick={onOpen}>
              menu
            </MaterialIcon>
          )}
          <div className={styles.logo}>
            <Logo width="100%" height="100%" preserveAspectRatio="xMinYMid" />
          </div>
          <div className={styles.profileWrapper}>
            <img src={avatar} alt="Avatar" />
            <div className={cx('md:block', { 'lg:hidden': !isOpen })}>
              <span>Jane Doe</span>
              <Link to="/#">View profile</Link>
            </div>
          </div>
          <Nav isOpen={isOpen} onItemClick={onClose} />
        </>
      )}
    </Sidebar>
  );
};

export default MainSidebar;
