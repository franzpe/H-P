import React, { FC } from 'react';

import styles from './PolicyHeader.module.css';

interface Props {
  heading: string;
}

const PolicyHeader: FC<Props> = ({ heading, children }) => {
  return (
    <header className={styles.header}>
      <div className="max-w-screen-xxl mx-auto main-padding-x pt-8 pb-12">
        <h1 className="text-white">{heading}</h1>
        <p className="font-thin text-white text-xl md:text-2xl lg:text-3xl">{children}</p>
      </div>
    </header>
  );
};

export default PolicyHeader;
