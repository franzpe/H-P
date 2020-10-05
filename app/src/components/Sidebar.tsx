import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import styles from './Sidebar.module.css';
import { ReactComponent as Logo } from '../assets/images/logo-small.svg';
import avatar from 'assets/images/JohnDoe.jpg';
import MaterialIcon from './MaterialIcon';
import { MaterialIconType } from 'types/common';

const Sidebar = () => {
  const overlay = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Overlay Hook for the animation exit
   */
  useEffect(() => {
    let id: NodeJS.Timeout;

    const handleKeyUp = (e: any) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('ckeyup', handleKeyUp);
      overlay.current?.classList.add(styles.open);
      overlay.current!.style.opacity = '0.5';
    } else {
      document.removeEventListener('keyup', handleKeyUp);
      overlay.current!.style.opacity = '0';

      id = setTimeout(() => {
        overlay.current?.classList.remove(styles.open);
      }, 350);
    }

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.setProperty('overflow', 'hidden');
  };

  function handleClose() {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.setProperty('overflow', 'auto');
    }
  }

  return (
    <div>
      <aside className={cx(styles.container, { [styles.open]: isOpen })}>
        {!isOpen && (
          <MaterialIcon type={MaterialIconType.Round} className={styles.hamburger} onClick={handleOpen}>
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
            <Link to="#">View profile</Link>
          </div>
        </div>
        <Nav isOpen={isOpen} onItemClick={handleClose} />
      </aside>
      <div ref={overlay} className={styles.overlay} onClick={handleClose} />
      {/* <div ref={overlay} className={cx(styles.overlay, { [styles.open]: isOpen })} onClick={handleClose} /> */}
    </div>
  );
};

export default Sidebar;
