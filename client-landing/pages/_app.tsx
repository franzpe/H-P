import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { initializePolyfills } from '../libs/pollyfills';
import { useGtag } from '../libs/gtag';
import { useRouter } from 'next/router';

import { CustomNextComponentType } from '../types/common';
import SiteLayout from '../components/layouts/SiteLayout';

import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useGtag();

  useEffect(() => {
    initializePolyfills();
  }, []);

  const getLayout = (Component as CustomNextComponentType).getLayout || (page => <SiteLayout>{page}</SiteLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default App;
