import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/images/svgs/logo.svg';

const Footer = () => {
  const handleMailClick = e => {
    e.preventDefault();
    window.location.href = 'mailto:info@hackersandpainters.io?subject=enquiry from website';
  };

  return (
    <footer className="max-w-screen-xxl mx-auto main-padding text-primary-2-shade">
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 gap-8 mb-16">
        <ul className="hidden lg:block">
          <li className="py-1" style={{ height: '25%' }}>
            <Logo preserveAspectRatio="xMinYMin meet" viewBox="0 0 225 47" height="100%" width="100%" />
          </li>
        </ul>
        <div>
          <ul>
            <li className="font-medium py-2">Company</li>
            <li className="py-2">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <ul>
            <li className="font-medium py-2">Discover Talent</li>
            <li className="py-2">
              <Link href="#">
                <a>Designers</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a>Developers</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a>Data Scientists</a>
              </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <ul>
            <li className="font-medium py-2">Help & Support</li>
            <li className="py-2">
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-medium py-2">My Account</li>
            <li className="py-2">
              <Link href="#">
                <a>Log In</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/sign-up/waiting-list">
                <a>Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-medium py-2 ">Stay in Touch</li>
            <li className="py-2 break-all">
              <button className="text-left" onClick={handleMailClick}>
                info@hackersandpainters.io
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs">
        © Talentito, 2020. All rights reserved |{' '}
        <Link href="/terms-of-use">
          <a className="border-b border-transparent hover:border-primary-2-shade">Terms</a>
        </Link>{' '}
        |{' '}
        <Link href="/privacy-policy">
          <a className="border-b border-transparent hover:border-primary-2-shade">Privacy Policy</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
