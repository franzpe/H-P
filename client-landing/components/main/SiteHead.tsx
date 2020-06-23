import React from 'react';
import Head from 'next/head';

const SiteHead = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Hackers'n painters</title>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SiteHead;
