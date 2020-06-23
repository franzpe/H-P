import { AppProps } from 'next/app';
import { FC } from 'react';

import { CustomNextComponentType } from '../types/common';
import SiteLayout from '../components/main/SiteLayout';

import '../styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = (Component as CustomNextComponentType).getLayout || (page => <SiteLayout>{page}</SiteLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default App;
