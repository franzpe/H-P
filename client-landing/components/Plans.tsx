import React, { useState, FC } from 'react';
import cx from 'classnames';
import MaterialIcon from './MaterialIcon';
import Link from 'next/link';

import PuzzleStarter from '../assets/images/svgs/puzzle-starter.svg';
import PuzzlePro from '../assets/images/svgs/puzzle-pro.svg';
import PuzzleGrowth from '../assets/images/svgs/puzzle-growth.svg';
import PuzzleEnterprise from '../assets/images/svgs/puzzle-enterprise.svg';

type Props = {
  href: string;
};

const Plans: FC<Props> = ({ href }) => {
  const [isBilledAnually, setIsBilledAnnually] = useState(true);

  return (
    <div className="text-primary-3-shade flex">
      <div className="inline-block py-4 pr-4text-left align-top max-w-xs my-3 flex-1 ">
        <ul className="text-primary-2-shade">
          <li className="h-56 leading-very-tight flex items-end justify-center">
            <div className="w-5/6">
              <span
                className={cx(
                  'text-accent-shade text-xs mb-2 block text-center ml-auto w-1/2 opacity-0 transition-opacity duration-500 ease',
                  {
                    ['opacity-100']: isBilledAnually
                  }
                )}
              >
                Save 15%
              </span>
              <div
                className="rounded-full border border-primary-2-tint text-sm cursor-pointer flex justify-between px-2 py-2 relative text-primary-2-tint mb-4"
                onClick={e => setIsBilledAnnually(!isBilledAnually)}
              >
                <span className="w-50% text-center">Billed monthly</span>
                <span className="w-50% text-center">Billed annually</span>
                <div
                  className={cx(
                    'right-0 top-0 absolute w-1/2 rounded-full bg-primary-3-shade py-2 px-2 text-center text-white font-medium transform translate-x-0 duration-300 transition-transform ease',
                    { ['-translate-x-full']: !isBilledAnually }
                  )}
                >
                  {isBilledAnually ? 'Billed annually' : 'Billed monthly'}
                </div>
              </div>
            </div>
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Daily Profile views</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Save candidates</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Sort candidates into custom lists
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Set candidate profile search alerts
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Take notes on candidates</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Sub-Accounts/Seat Management</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Usage reporting</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Access to proprietary ranking system
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Volume & multi-year discounts
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Dedicated relationship manager
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            See last viewdate of a candidate's profile
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">
            Track when/how you've reached out to candidates
          </li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Integrate with ATS systems</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">API access</li>
          <li className="h-14 leading-very-tight flex items-center justify-start">Trigger actions via Zapier</li>
        </ul>
      </div>
      <div className="whitespace-no-wrap overflow-x-auto flex flex-1 ">
        <div className="inline-block p-4 rounded-lg  shadow-card text-center mx-2 ml-3 align-top w-40 my-3">
          <ul>
            <li className="h-56">
              <h5 className="font-semibold mb-4">Starter</h5>
              <div className="flex items-start justify-center h-24 mb-2">
                <PuzzleStarter />
              </div>
              <div className="font-avenir-heavy text-accent-orange font-semibold text-3xl">
                ${isBilledAnually ? 299 : 29}
              </div>
              <div className="text-black">{isBilledAnually ? 'a year' : 'a month'}</div>
            </li>
            <li className="h-14 flex items-center justify-center">250</li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 ">
              <Link href={href}>
                <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange  hover:bg-accent-shade">
                  Select
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="inline-block p-4 rounded-lg border-1.5 border-accent-shade align-top shadow-card text-center mx-2 w-40 my-3">
          <ul>
            <li className="h-56">
              <h5 className="font-semibold mb-4">Pro</h5>
              <div className="flex items-start justify-center h-24 mb-2">
                <PuzzlePro width="83" />
              </div>
              <div className="font-avenir-heavy text-accent-orange font-semibold text-3xl">
                ${isBilledAnually ? 599 : 59}
              </div>
              <div className="text-black">{isBilledAnually ? 'a year' : 'a month'}</div>
            </li>
            <li className="h-14 flex items-center justify-center">500</li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 ">
              <Link href={href}>
                <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange  hover:bg-accent-shade">
                  Select
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="inline-block p-4 rounded shadow-card text-center align-top mx-2 w-40 my-3">
          <ul>
            <li className="h-56">
              <h5 className="font-semibold mb-4">Growth</h5>
              <div className="flex items-start justify-center h-24 mb-2 ">
                <PuzzleGrowth />
              </div>
              <div className="font-avenir-heavy text-accent-orange font-semibold text-3xl">
                ${isBilledAnually ? 999 : 99}
              </div>
              <div className="text-black">{isBilledAnually ? 'a year' : 'a month'}</div>
            </li>
            <li className="h-14 flex items-center justify-center">1000</li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14 flex items-center justify-center"></li>
            <li className="h-14">
              <Link href={href}>
                <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange  hover:bg-accent-shade">
                  Select
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="inline-block p-4 rounded shadow-card text-center ml-2 align-top w-40 mr-2 my-3">
          <ul>
            <li className="h-56 flex flex-col">
              <h5 className="font-semibold mb-4">Enterprise</h5>
              <div className="flex items-start justify-center h-24 mb-2">
                <PuzzleEnterprise />
              </div>
              <div className="font-avenir-heavy text-primary-2-navy font-bold text-2xl block my-auto">Custom</div>
            </li>
            <li className="h-14 flex items-center justify-center">Unlimited</li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14 flex items-center justify-center">
              <MaterialIcon>done</MaterialIcon>
            </li>
            <li className="h-14">
              <Link href={href}>
                <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-primary-2-navy hover:bg-accent-shade">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plans;
