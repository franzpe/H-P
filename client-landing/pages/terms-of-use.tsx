import React, { useRef, Fragment } from 'react';

import PolicyHeader from '../components/PolicyHeader';

const sections = [
  {
    heading: 'Purpose',
    content: (
      <Fragment>
        {/* <p className="my-4 text-primary-2-tint text-lg font-medium">1.1 Subsection</p> */}
        <p className="text-lg text-primary-2-shade">
          The Site provides certain information about us and about the products and services we sell, and provides
          you with opportunities to contact us.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Subscriptions',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          If you are an H&P subscriber, then (i) your access and use of H&P services, including services that may
          be accessible to subscribers through the Site, is governed by the provisions of the subscription
          agreement and subscription order form entered into between you and H&P (“Subscription Agreement”), and
          (ii) in the event of any conflict between these Terms and the Subscription Agreement, the Subscription
          Agreement will prevail.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Ownership; Proprietary Rights',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          The Site is owned and operated by H&P. The visual interfaces, graphics, design, compilation, information,
          data, computer code, and all other elements of the Site (“Materials”) provided by H&P are protected by
          intellectual property and other laws. All Materials associated with the Site are the property of H&P or
          our third-party licensors. You are authorized to view the Materials on the Site, in accordance with these
          Terms; but you may not make any other use of the Materials without the prior express written permission
          of H&P. For example, you may not copy or distribute the Materials, or prepare derivative works based on
          the Materials, without our written consent in advance.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Privacy Policy',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          Please read the H&P Privacy Policy for information relating to our collection, use, storage and
          disclosure of information we collect about you. The H&P Privacy Policy is incorporated by this reference
          into, and made a part of, these Terms.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Prohibited Conduct',
    content: (
      <p>
        YOU AGREE NOT TO:
        <ul className="text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
          <li>
            use the Site for any illegal purpose or in violation of any local, state, national, or international
            law;
          </li>
          <li>
            interfere with security-related features of the Site, including by disabling or circumventing features
            that prevent or limit access to or use of any content, or by using any account credentials that are not
            your own;
          </li>
          <li>
            interfere with the operation of the Site or any visitor’s enjoyment of the Site, including by
            interfering with, intruding into, disrupting, or making repeated accesses or requests that cause
            performance degradation to any network, equipment, server, or software system used to host or otherwise
            implement the Site;
          </li>
          <li>
            attempt to do any of the acts described in this Section 5, or assist, encourage, request, or permit any
            person to engage in any of the acts described in this Section 5.
          </li>
        </ul>
      </p>
    )
  },
  {
    heading: 'Linked Websites',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          The Site may contain links to third-party websites such as social media websites. Third-party websites
          are not under our control, and we are not responsible for their content.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Modification of the Site',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          We reserve the right to modify or discontinue the Site at any time, temporarily or permanently, without
          notice to you. We will have no liability whatsoever on account of any change to the Site or termination
          of your access to or use of the Site.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Modification of these Terms',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          We reserve the right, at our discretion, to change these Terms on a going-forward basis at any time.
          Please check these Terms periodically for changes.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Feedback',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          If you choose to provide us with input and suggestions regarding problems with or proposed modifications
          or improvements to the Site (“ Feedback”), then you hereby grant H&P an unrestricted, perpetual,
          irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the Feedback in any manner and for
          any purpose, including to improve the Site and create other products and services.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'No Warranty',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          THE SITE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SITE ARE PROVIDED “AS IS” AND ON AN “AS
          AVAILABLE” BASIS. H&P DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
          RELATING TO THE SITE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SITE, INCLUDING WITHOUT
          LIMITATION ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, OR
          NON-INFRINGEMENT. H&P DOES NOT WARRANT THAT THE ACCESS TO SITE, OR ANY MATERIALS OR CONTENT OFFERED
          THROUGH THE SITE, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS,
          AND DOES NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED.
          <br />
          NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SITE OR ANY MATERIALS OR
          CONTENT AVAILABLE THROUGH THE SITE WILL CREATE ANY WARRANTY REGARDING THE SITE THAT IS NOT EXPRESSLY
          STATED IN THESE TERMS. YOU UNDERSTAND AND AGREE THAT YOU USE THE SITE AND ANY MATERIALS OR CONTENT
          AVAILABLE THROUGH THE SITE AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY
          DAMAGE TO YOUR PROPERTY (INCLUDING THE COMPUTER SYSTEM OR MOBILE DEVICE YOU USE TO ACCESS THE SITE), OR
          LOSS OF DATA THAT RESULTS FROM THE USE OF THE SITE OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE
          SITE.
          <br />
          SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM
          JURISDICTION TO JURISDICTION.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Limitation of Liability',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          IN NO EVENT WILL H&P BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE
          DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR
          RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SITE OR ANY MATERIALS OR
          CONTENT ON THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY
          OTHER LEGAL THEORY, EVEN IF H&P HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE. <br />
          THE AGGREGATE LIABILITY OF H&P AND ITS OFFICERS, DIRECTORS, EMPLOYEES, CONSULTANTS, AFFILIATES,
          SUBSIDIARIES, AND AGENTS TO YOU FOR ANY AND ALL CLAIMS RELATING TO THE USE OF (OR ANY INABILITY TO USE)
          THE SITE, OR OTHERWISE ARISING UNDER THESE TERMS, SHALL UNDER NO CIRCUMSTANCES EXCEED $50 USD.
          <br />
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
          DAMAGES. ACCORDINGLY, THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
          <br />
          EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR
          EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES. THIS ALLOCATION IS
          AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS
          SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 11 WILL
          APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Governing Law and Choice of Forum',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          These Terms are governed by the laws of the State of Delaware without regard to conflict of law
          principles. Any dispute arising in connection with the Site or these Terms will be litigated exclusively
          in the state and federal courts located in Delaware, and both you and H&P hereby submit to the personal
          jurisdiction of such courts, and waive any objection regarding venue or inconvenient forum in such
          courts.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'General',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          The failure to require performance of any provision will not affect our right to require performance at
          any other time after that, nor will a waiver by us of any breach or default of these Terms, or any
          provision of these Terms, be a waiver of any subsequent breach or default or a waiver of the provision
          itself. If any part of these Terms is held to be invalid or unenforceable, the unenforceable part will be
          given effect to the greatest extent possible, and the remaining parts will remain in full force and
          effect. Upon termination of these Terms for any reason, Sections 3, 4, and 9 through 13 will survive.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Consent to Electronic Communications',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          You consent to receive certain electronic communications from us as further described in our Privacy
          Policy.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Contact Information',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          The Site is controlled by Talentito, LLC., located at 455 N Whisman Rd #400, Mountain View, CA 94043. You
          may contact us by sending correspondence to that address or by emailing us at
          contact@hackersandpainters.io.
        </p>
      </Fragment>
    )
  }
];

const TermsOfUse = () => {
  const sectionRefs = useRef(new Array(sections.length));

  const handleOnSectionClick = (index: number) => e => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <PolicyHeader heading="Terms of Service">
        Welcome, and thank you for your interest in Talentito, LLC. (“H&P,” “we,” or “us”) and our website at
        www.hackersandpainters.io (the “Site”). By accessing or using the Site, you agree to these Terms of Use
        (the “Terms”) which are a legally binding contract between you and H&P regarding your use of the Site. If
        you do not wish to accept the Terms, do not access or use the Site.
      </PolicyHeader>
      <div className="inner max-w-6xl flex flex-col lg:flex-row lg:space-x-12 relative">
        <div className="hidden lg:block">
          <ul className="list-decimal text-primary-2-tint text-xl w-68 mb-4 lg:my-4 space-y-3 lg:sticky lg:top-32 list-inside font-medium">
            {sections.map((s, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-accent-orange"
                onClick={handleOnSectionClick(index)}
              >
                {s.heading}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {sections.map((section, index) => (
            <section key={index} ref={el => (sectionRefs.current[index] = el)} className="mb-16">
              <h6 className="my-4 text-accent-orange font-bold font-avenir">
                {index + 1}. {section.heading}
              </h6>
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
