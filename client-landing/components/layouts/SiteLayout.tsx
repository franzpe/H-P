import Header from '../main/Header';
import Footer from '../main/Footer';
import SiteHead from '../main/SiteHead';

const SiteLayout = ({ children }) => (
  <div className="flex flex-col h-full">
    <SiteHead />
    <Header />
    <div className="flex-1 main-padding max-w-screen-xl mx-auto w-full">{children}</div>
    <Footer />
  </div>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
