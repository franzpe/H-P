import { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import SiteHead from './SiteHead';

const SiteLayout = ({ children }) => (
  <Fragment>
    <SiteHead />
    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
