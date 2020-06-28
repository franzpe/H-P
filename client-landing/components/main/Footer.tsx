import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/images/svgs/logo.svg';

const Footer = () => {
  const handleMailClick = e => {
    e.preventDefault();
    window.location.href = 'mailto:info@hackersandpainters.io?subject=enquiry from website';
  };

  return (
    <footer className="max-w-screen-xl mx-auto px-8 py-8 text-primary-2-shade">
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 gap-8 mb-16">
        <ul>
          <li className="py-1" style={{ height: '25%' }}>
            <Logo preserveAspectRatio="xMinYMin meet" viewBox="0 0 225 47" height="100%" width="100%" />
          </li>
        </ul>
        <div>
          <ul>
            <li className="font-medium py-2">Company</li>
            <li className="py-2">
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a>Features</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a>Careers</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
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
        </div>
        <div>
          <ul>
            <li className="font-medium py-2">Help & Support</li>
            <li className="py-2">
              <Link href="#">
                <a>Contact Us</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
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
              <Link href="#">
                <a>Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-medium py-2">Stay in Touch</li>
            <li className="py-2">
              <button onClick={handleMailClick}>info@hackersandpainters.io</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs">
        © Hackers & Painters™, 2020. All rights reserved |{' '}
        <Link href="#">
          <a className="border-b border-transparent hover:border-primary-2-shade">Terms</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a className="border-b border-transparent hover:border-primary-2-shade">Privacy Policy</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a className="border-b border-transparent hover:border-primary-2-shade">Cookies Policy</a>
        </Link>{' '}
        <br />
        Company Registration Number: 12345678
      </div>
    </footer>
  );
};

export default Footer;
