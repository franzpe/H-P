import Header from '../main/Header';
import cx from 'classnames';

import Footer from '../main/Footer';
import SiteHead from '../main/SiteHead';
import { useRouter } from 'next/router';

const fullySizedPages = ['/', '/about', '/terms-of-use', '/privacy-policy', '/cookies-policy'];

const SiteLayout = ({ children }) => {
  const router = useRouter();
  const isPageFullySized = fullySizedPages.findIndex(p => p === router.pathname) > -1;

  return (
    <div className="flex flex-col h-full">
      <SiteHead />
      <Header />
      <main
        className={cx('flex-1  w-full', {
          ['main-padding max-w-screen-xxl mx-auto']: !isPageFullySized
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
