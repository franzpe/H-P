import React from 'react';

import LikeIcon from '../../assets/images/svgs/twitter-like.svg';
import PuzzlePieceIcon from '../../assets/images/svgs/puzzle-piece-2.svg';
import Link from 'next/link';
import { OpenPositions } from '../../models/OpenPosition';

import AttachMoneySvg from '../../assets/images/svgs/attach-money.svg';
import SchoolSvg from '../../assets/images/svgs/school.svg';
import BeachAccessSvg from '../../assets/images/svgs/beach-access.svg';
import WeekendSvg from '../../assets/images/svgs/weekend.svg';
import ChildCareSvg from '../../assets/images/svgs/child-care.svg';
import Receipt from '../../assets/images/svgs/receipt.svg';

const Careers = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-8 font-avenir-light text-lg">
      <div className="flex-1">
        <h1 className="font-bold mb-4 -mt-2">Careers</h1>
        <p className="text-2xl mb-10">
          Hackers & Painters is expanding and we are looking for talented people to join our team!
        </p>
        <ul className="font-avenir-book text-primary-1-shade grid grid-cols-2 gap-6">
          <li className="mb-2">
            <WeekendSvg height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Remote first culture</p>
            <p>
              Live wherever you want, whenever you want. We work all over the world but organize trips for the
              entire team to meet in person every six months.
            </p>
          </li>
          <li>
            <BeachAccessSvg height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Flexible holidays</p>
            <p>
              Unlimited time off with a mandatory company wide shutdown for the last two weeks of December, in
              addition to one fully off-grid company volunteer focused trip per year.
            </p>
          </li>
          <li>
            <Receipt height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Equipment stipendss</p>
            <p>
              Mac, Windows, Linux… whatever you need to get the job done. Have a favorite coworking space? We’ll
              pay for it and your local public transportation pass.
            </p>
          </li>
          <li>
            <AttachMoneySvg height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Compensation</p>
            <p>
              We pay equal to or above market rate salaries with an additional company wide profit share for every
              team member. In the event of a company sale, this profit share immediately becomes equity.
            </p>
          </li>
          <li>
            <SchoolSvg height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Learning and development</p>
            <p>
              Our culture is first and foremost “Learn by doing”. In order to live this to its fullest, we are glad
              to cover all supplemental education costs.
            </p>
          </li>
          <li>
            <ChildCareSvg height="50px" width="50px" className="mb-4" />
            <p className="font-avenir-heavy">Parental leave</p>
            <p>
              We ask new parents to take as much time off as they need, but encourage at least a minimum of three
              months.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="inline-flex space-x-4 text-primary-2-navy mb-6">
          <li className="font-avenir-black cursor-pointer">All</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">Designers</li>
          <li className="cursor-pointer">Operations</li>
        </ul>
        <div className="space-y-8">
          {OpenPositions.map(position => (
            <div key={position.slug} className="p-6 md:py-8 md:px-10 xl:px-12 shadow-card rounded-lg">
              <h3 className="mb-2 font-bold">{position.heading}</h3>
              {position.preview()}
              <div className="space-x-2 md:space-x-4">
                <Link href={`/careers/[slug]`} as={`/careers/${position.slug}`} prefetch={true}>
                  <button className="text-center py-2 w-32 md:w-40 xl:w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
                    More details
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="text-center py-2 w-32 md:w-40 xl:w-48 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
