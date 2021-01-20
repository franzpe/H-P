import React, { ReactNode, useEffect, useRef } from 'react';
import cx from 'classnames';

import styles from './Sidebar.module.css';

type ChildrenProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type Props = {
  className?: string;
  position?: 'left' | 'right';
  useOpener: () => [boolean, (value: React.SetStateAction<boolean>) => void];
  children: (props: ChildrenProps) => ReactNode;
};

const Sidebar = ({ children, position = 'left', className, useOpener }: Props) => {
  const overlay = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useOpener();

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.setProperty('overflow', 'auto');
    }
  };

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
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.setProperty('overflow', 'hidden');
  };

  return (
    <div>
      <aside
        className={cx(styles.container, className, {
          [styles.right]: position === 'right',
          [styles.open]: isOpen
        })}
      >
        {children({ isOpen, onClose: handleClose, onOpen: handleOpen })}
      </aside>
      <div ref={overlay} className={styles.overlay} aria-hidden onClick={handleClose} />
    </div>
  );
};

export default Sidebar;
