import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';

import { CustomNextComponentType } from '../types/common';
import SiteLayout from '../components/layouts/SiteLayout';

import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { initializePolyfills } from '../libs/pollyfills';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    initializePolyfills();
  }, []);

  const getLayout = (Component as CustomNextComponentType).getLayout || (page => <SiteLayout>{page}</SiteLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default App;
