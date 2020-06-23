import { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import SiteHead from './SiteHead';

const SiteLayout = ({ children }) => (
  <div className="flex flex-col h-full">
    <SiteHead />
    <Header />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
