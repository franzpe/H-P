import React, { Fragment, useRef } from 'react';

import PolicyHeader from '../components/PolicyHeader';

const sections = [
  {
    heading: 'The personal information H&P collects and why we collect it',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          The personal information that we may collect about you broadly falls into the following categories:
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">A. Information that you provide voluntarily</p>
        <p className="text-lg text-primary-2-shade">
          Certain parts of our Website and our Services, and if you attend one of our marketing events or webinars,
          or if you enquire about our Services or ask for a product demonstration, we may ask you to provide
          personal information voluntarily. This includes: name, job title, employer, and contact details (address,
          email and phone number). You may also need to create an account ID and password to access our Services
          <br />
          <br />
          We collect this personal information for the following commercial purposes
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              <b>Account registration:</b> We collect information that is necessary for you to register an account
              with, and log in to, our Website and Services;
            </li>
            <li>
              <b>Customer communications:</b> We collect information that is necessary to respond to product
              enquiries and support requests you submit through the Website and Services.
            </li>
            <li>
              <b>Direct marketing:</b> We collect information to send you direct marketing about our Services,
              marketing offers and resources, newsletters and other company updates to Customers, Users and
              marketing leads. The foregoing does not apply to our candidates that engage with our platform for
              interviewing or scheduling with our clients.
            </li>
            <li>
              <b>To personalize the marketing e-mails that we send you:</b> we infer your interests from your blog
              comments and Website interactions so that we can send you emails that are more relevant to you; the
              foregoing does not apply to our candidates that engage with our platform for interviewing or
              scheduling with our clients.
            </li>
            <li>
              <b>When you request a demo or request to be contacted.</b> We use your personal information to
              contact you and provide information about our Services..
            </li>
            <li>
              <b>When you Comment on our Blog.</b> Your comment may include personal information that is posted on
              our Blog.
            </li>
          </ul>
          <br />
          Where we need your consent to collect and use your personal information under applicable data protection
          laws, we will ask for this at the relevant time and make clear the purposes to which you are consenting.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">
          B. Information that we collect automatically
        </p>
        <p className="text-lg text-primary-2-shade">
          When you visit our Website or use our Services, we may collect certain information automatically from
          your device.
          <br />
          <br />
          The information we collect automatically may include identifiers (such as IP address, device type, unique
          device identification numbers), browser-type, geolocation information (broad geographic location such as
          country or city-level location) and other technical information. We may also collect internet activity
          information about how your device has interacted with our Website or Services, including the pages
          accessed and links clicked as well as how you interact with marketing emails and other communications we
          may send you.
          <br />
          <br />
          Some of this information may be collected using cookies and similar tracking technology, as explained
          further under the heading “Cookies and similar tracking technology” below.
          <br />
          <br />
          We collect this personal information for the following business purposes
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              <b>Analytics and fraud prevention:</b> We collect information that for our internal reporting and
              business analytics, to prevent or detect illegal activities on our Website or Services (or other
              activities that do not comply with our Terms of Service), and to improve the quality and relevance of
              our Website to visitors.
            </li>
            <li>
              <b>
                Auditing related to current interactions with you and concurrent interactions with our website:
              </b>{' '}
              to verify accurate delivery of our Services.
            </li>
            <li>
              <b>
                Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal
                activity, and prosecuting those responsible for those activities:
              </b>{' '}
              for example, to identify invalid clicks and protect us from fraudulent behaviour; and
            </li>
            <li>
              <b>
                Verifying or maintaining the quality of our Services and improving, upgrading or enhancing them:
              </b>{' '}
              for example, (i) for audit, research, and analysis of the information in order to maintain, improve,
              upgrade or enhance our services, and to ensure that our technologies function properly, (ii) other
              internal operations, such as debugging, support, and security.
            </li>
          </ul>
          <br />
          Where we need your consent to collect and use your personal information under applicable data protection
          laws, we will ask for this at the relevant time and make clear the purposes to which you are consenting.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">
          C. Information that we obtain from third party sources
        </p>
        <p className="text-lg text-primary-2-shade">
          We may obtain marketing leads from third parties, including name, email address and other contact
          information.
          <br />
          <br />
          We may receive personal information about Job Candidates from third party sources. The categories of
          personal information we obtain include: name, education, location, skills, company name, job title,
          industry, achievements, applicant tracking, information provided in interviewing.
          <br />
          <br />
          If you are not located in the EEA, we may obtain sensitive personal data such as race or ethnicity, or
          gender via self-identification or publicly available information.
          <br />
          <br />
          The categories of third party sources from whom we obtain this data are: basic contact info, such as,
          name, email, company, title, phone, address
          <br />
          <br />
          We only collect this personal information where we have checked that these third parties either have your
          consent or are otherwise legally permitted or required to disclose your personal information to us.
          <br />
          <br />
          We collect this personal information for the commercial purpose of providing Services to our Customers.
          We also collect this personal information for the business purposes of:
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              <b>Supplementing our records:</b> We collect information that is necessary supplement the records we
              hold about you, so that we can improve the quality and relevance of any advertising or communications
              we send you.
            </li>
            <li>
              <b>For compliance with legal obligations:</b> to comply with legal obligations that apply to us; and
            </li>
            <li>
              <b>For any other purpose to which you consent:</b> to use your personal information for any other
              purpose to which you have provided consent.
            </li>
          </ul>
          <br />
          Our legal basis under the GDPR for collecting and using the personal information described above will
          depend on the personal information concerned and the specific context in which we collect it. However, we
          will normally collect personal information from you only where we have your consent to do so, where we
          need the personal information to perform a contract with you, or where the processing is in our
          legitimate interests and not overridden by your data protection interests or fundamental rights and
          freedoms.
          <br />
          <br />
          In general, we will use the personal information we collect from you only for the purposes described in
          this Privacy Notice or for purposes that we explain to you at the time we collect your personal
          information. However, we may also use your personal information for other purposes that are not
          incompatible with the purposes we have disclosed to you (such as archiving purposes in the public
          interest, scientific or historical research purposes, or statistical purposes) if and where this is
          permitted by applicable data protection laws.
          <br />
          <br />
          If you have questions or need further information concerning the legal basis on which we collect and use
          your personal information, please contact us using the contact details provided under the “How to contact
          us” below.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Who does H&P share personal information with',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          We may disclose personal information to third parties for a variety of business or commercial purposes.
          This includes disclosure:
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              to our <b>group companies</b> <i>for our operational business purposes.</i>
            </li>
            <li>
              to our <b>third-party services providers</b> who provide data processing for our operational business
              purposes. For example, we may disclose this personal information to support the delivery of, provide
              functionality on, or help to enhance the security of our Website or Services), or for other
              operational and commercial purposes that are described in this Privacy Notice or notified to you when
              we collect your personal information;
            </li>
            <li>
              to our <b>partners</b> with whom we share data for the H&P platform. We may disclose this information
              for our operational business purposes or for the commercial purpose to provide Services to our
              Customers.
            </li>
            <li>
              to our <b>customers</b>, for the commercial purpose of providing our services;
            </li>
            <li>
              to any{' '}
              <b>competent law enforcement body, regulatory, government agency, court or other third party</b>
              where we believe disclosure is necessary (i) as a matter of applicable law or regulation, (ii) to
              exercise, establish or defend our legal rights, or (iii) to protect your vital interests or those of
              any other person;
            </li>
            <li>
              to an actual or <b>potential buyer</b> (and its agents and advisers) in connection with any actual or
              proposed purchase, merger or acquisition of any part of our business, provided that we inform the
              buyer it must use your personal information only for the purposes disclosed in this Privacy Notice;
            </li>
            <li>
              to any <b>other person with your consent</b> to the disclosure.
            </li>
            <li>as otherwise allowed by applicable data protection law.</li>
          </ul>
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Cookies and Similar Tracking Technologies',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          When you visit the H&P Website or use the Services, or both, we and our third-party service providers
          acting on our behalf automatically collect certain data using tracking technologies like cookies, web
          beacons, and similar technologies.
          <br />
          <br />
          A cookie is a small amount of data, which often includes an anonymous unique identifier that is sent to
          your browser from a website’s computers and stored on your computer’s hard drive.
          <br />
          <br />
          These technologies are used to help us better understand user behavior and facilitate and measure the
          effectiveness of our H&P Website and Services.
          <br />
          <br />
          We use cookies to record current session information. We also use third party cookies (for example Google
          Analytics) to provide aggregated information on Website usage statistics and patterns.
          <br />
          <br />
          All modern Internet browsers allow you to control your cookie settings. These settings are usually
          accessed in the ‘Options’ or ‘Preferences’ section of your browser. On your mobile device, go to
          Settings, then go to the specific web-browser, and then to the Cookies section. Please note that certain
          features of the Website will not be available once cookies are disabled. For further information about
          cookies and how to manage them, please visit www.allaboutcookies.org.
          <br />
          <br />
          H&P uses web beacons with cookies or separately to compile information about your engagement with us. Web
          beacons are clear electronic images that can recognize certain types of information on your computer,
          such as cookies, when you view a particular website tied to the web beacon, and a description of a
          website tied to the web beacon.
          <br />
          <br />
          Here is a basic description and overview of the type of cookies H&P uses:
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">A. Required Cookies</p>
        <p className="text-lg text-primary-2-shade">
          Required cookies make it possible for you to access the Services, navigate within the Services, and
          access information related to your account. Each time you log into the Services, a cookie containing an
          encrypted, unique identifier that is tied to your account is placed on your browser. These cookies allow
          H&P to uniquely identify you when you are logged into the Services and to process your requests.
          <br />
          <br />
          Required cookies are necessary to operate the account portal, so you can’t opt out of them.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">B. Functionality Cookies</p>
        <p className="text-lg text-primary-2-shade">
          Functionality cookies allow the H&P Website and Services to remember information you have entered or
          preferences you select, and provide enhanced, more personal features. These cookies allow you to optimize
          your use of the Services after logging in. These cookies can also be used to remember changes you have
          made to the portions of your account that you can customize.
          <br />
          <br />
          You can use your browser settings to opt out of functionality cookies. For more information on how to do
          that, click here. Note that opting out may affect the functionality of our Website or Services for you.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">C. Performance Cookies</p>
        <p className="text-lg text-primary-2-shade">
          These cookies collect data about how visitors use the H&P Website or Services. This includes data like
          which pages visitors go to the most. These cookies don’t collect information that individually identifies
          visitors. The data these cookies collect is aggregated and intended to be de-identified and used to
          improve how the site functions and performs.
          <br />
          <br />
          <i>
            Third party service providers that currently place performance cookies within the Services or H&P
            Website include:
          </i>
          <br />
          <br />
          Google Analytics: We use Google Analytics to help analyze page statistics and user behavior to the H&P
          Website and Services. For information on how to opt-out of tracking technologies from Google Analytics,
          click{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=None"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            here
          </a>
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">D. Advertising Cookies</p>
        <p className="text-lg text-primary-2-shade">
          H&P may have third party service providers track and analyze usage and volume statistical information
          from those who visit the H&P Website and Services. H&P sometimes uses cookies placed by its third-party
          service providers to track the performance of our advertisements. For example, these cookies remember
          which browsers have visited the H&P Websites or the Services. This data given to the third-party service
          providers does not include information that identifies you specifically, but this data may be
          re-associated with information that identifies you specifically after H&P receives it.
          <br />
          <br />
          To learn more about how to opt out of targeting and advertising cookies, you can go to the Your Online
          Choices page, the Network Advertising Initiative page, and the Digital Advertising Alliance’s Consumer
          Choice page. These opt-out tools are provided by third parties, not H&P. We do not control or operate
          these tools or the choices that advertisers and others provide through these tools.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'General',
    content: (
      <Fragment>
        <p className="my-4 text-primary-2-tint text-lg font-medium">A. How we secure your PI</p>
        <p className="text-lg text-primary-2-shade">
          H&P takes security very seriously.
          <br />
          We use appropriate security measures to protect the security of your PI both online and offline. These
          measures vary based on the sensitivity of the information that we collect, process and store. Please
          note, though, that no website or Internet transmission is completely secure, so while we strive to
          protect your PI, we cannot guarantee that unauthorized access, hacking, PI loss or a PI breach will never
          occur.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">B. Information about Children</p>
        <p className="text-lg text-primary-2-shade">
          We do not knowingly collect any personal information directly from children under the age of 16. If we
          discover we have received any personal information from a child under the age of 16, we will take
          reasonable steps to delete that information as quickly as possible. If you believe we have any
          information from or about anyone under the age of 16, please contact us at privacy@hackersandpainters.io.
        </p>
        <p className="my-4 text-primary-2-tint text-lg font-medium">C. Data Protection Rights</p>
        <p className="text-lg text-primary-2-shade">
          H&P supports the exercise of your data protection rights in accordance with applicable data protection
          laws. Specifically, if you are located in the EEA or are a California resident (or otherwise have these
          rights under applicable data protection law):
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              You can request to <b>know, access, correct, update or delete</b> your personal information by
              contacting us using the contact details provided under the “How to contact us” heading below, and we
              will fulfill your request in accordance with applicable data protection laws. We may need to verify
              your identity in order to action your request, including by asking for you to provide a government
              issued Identification Document. Once we have verified you, we will respond and comply with your
              specific requests.
            </li>
            <li>
              You have the right to opt-out of marketing communications we send you at any time. You can exercise
              this right by clicking on the “unsubscribe” or “opt-out” link in the marketing e-mails we send you.
              To opt-out of other forms of marketing (such as postal marketing or telemarketing), then please
              contact us using the contact details provided under “How to contact us”.
            </li>
          </ul>
          <br />
          California residents have the following rights:
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              This Privacy Notice describes the categories of personal information that we have collected,
              disclosed for a business purpose and sold over the preceding twelve (12) months. Please refer to the
              sections headed “
              <i>What information does H&P collect?” and “Who does H&P share my personal information with?</i>“ for
              more information.
            </li>
            <li>
              You are entitled to request certain information regarding our disclosure of personal information to
              third parties for their direct marketing purposes. If you are a California resident and would like to
              request this information then please submit a request to H&P as described below at “How to contact
              us“.
            </li>
            <li>
              You have the right to opt out of the sale of your personal information, described in the Section “Who
              Does H&P Share My Personal Information With?” If you wish to opt out from the sale of your personal
              information, you can do so by contacting us using the “how to contact us” information below.
            </li>
            <li>
              You have the right not to receive discriminatory treatment for the exercise of your privacy rights
              under California law.
            </li>
          </ul>
          <br />
          If you are located in the EEA, you may also have the following rights:
          <ul className="mt-2 text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
            <li>
              You can <b>object to the processing</b> of your personal information, ask us to{' '}
              <b>restrict processing </b> of your personal information or <b>request portability</b> of your
              personal information. Again, you can exercise these rights by contacting us using the contact details
              provided under the “How to contact us” heading below.
            </li>
            <li>
              If we have collected and process your personal information on the basis of your consent, then you can
              <b>withdraw your consent</b> at any time. Withdrawing your consent will not affect the lawfulness of
              any processing we conducted prior to your withdrawal, nor will it affect the processing of your
              personal information conducted in reliance on lawful processing grounds other than consent.
            </li>
          </ul>
          <br />
          If you would like to exercise any of your rights or have questions about our privacy practices, you can
          contact us using the details provided under the “How to contact us“. We respond to all requests we
          receive from individuals wishing to exercise their data protection rights in accordance with applicable
          data protection laws.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Data Retention and Deletion',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          H&P will retain your information as long as we have a legitimate interest or business purpose to retain
          the information, or as otherwise allowed by applicable law.
          <br />
          <br />
          If you are a job candidate whose personal information has been provided to H&P by an Employer, then we
          will keep a copy of your personal information until a period not to exceed 90 days after the end of our
          contract with the applicable Employer, or another length of time as required by the applicable Employer.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Changes to this Notice',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          We are constantly trying to improve our Website and the Services, so this Privacy Notice may need to
          change. If we change the Privacy Notice then we will notify you here in this Privacy Notice by describing
          the changes at the top of this Privacy Notice.
        </p>
      </Fragment>
    )
  },
  {
    heading: 'How to contact us',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          Any questions about this Privacy Notice, our privacy practices or to submit a request to exercise data
          subject rights, should be addressed
          <br />
          <br />
          by email to: privacy@hackersandpainters.io
          <br />
          <br />
          by mail to: Talentito, 455 N Whisman Rd #400, Mountain View, CA, 94043, USA or
          <br />
          <br />
          via our website.
          <br />
          <br />
          We prefer email.
          <br />
          <br />
          If you are located in the EEA and contacting us does not resolve your complaint, you may file a
          complaint, free of charge, with the relevant EU data protection authority (DPA). H&P will cooperate with
          the United States Federal Trade Commission and any DPAs in the investigation and resolution of complaints
          that cannot be resolved between H&P and the complainant that are brought to a relevant DPA. Further, you
          may invoke binding arbitration when other dispute resolution procedures have been exhausted.
          <br />
          <br />
          If you are unable to access this notice, please contact us and we will arrange to supply you with the
          information you need in an alternative format that you can access. You can access a printable version of
          this notice here: H&P Privacy Notice Dec 2019.
        </p>
      </Fragment>
    )
  }
  // {
  //   heading: 'Lorem ipsum',
  //   content: (
  //     <Fragment>
  //       <p className="my-4 text-primary-2-tint text-lg font-medium">1.1 Subsection</p>
  //       <p className="text-lg text-primary-2-shade">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //         adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
  //         consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
  //         amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
  //         dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
  //         ipsum dolor sit amet, consectetur adipiscing elit?
  //       </p>
  //     </Fragment>
  //   )
  // },
  // {
  //   heading: 'Lorem ipsum',
  //   content: (
  //     <Fragment>
  //       <ul className="text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
  //         <li>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //           adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
  //         </li>
  //         <li>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //           adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
  //         </li>
  //         <li>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //           adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
  //         </li>
  //       </ul>
  //     </Fragment>
  //   )
  // },
  // {
  //   heading: 'Lorem ipsum',
  //   content: (
  //     <Fragment>
  //       <p className="text-lg text-primary-2-shade">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //         adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
  //         consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
  //         amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
  //         dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
  //         ipsum dolor sit amet, consectetur adipiscing elit?
  //         <br />
  //         <br />
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
  //         adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
  //         consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
  //         amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
  //         dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
  //         ipsum dolor sit amet, consectetur adipiscing elit?
  //       </p>
  //     </Fragment>
  //   )
  // }
];
const PrivacyPolicy = () => {
  const sectionRefs = useRef(new Array(sections.length));

  const handleOnSectionClick = (index: number) => e => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <PolicyHeader heading="Privacy Policy">
        This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do
        with it.
      </PolicyHeader>
      <div className="inner max-w-6xl flex flex-col lg:flex-row lg:space-x-8 relative">
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
          <p className="text-lg text-primary-2-shade">
            Talentito, LLC (“H&P,” “we,” or “us”) is a web-based software solution that allows recruiting
            professionals to recruit faster, smarter and better by using predictive algorithms and data-backed
            insights.
            <br />
            <br />
            We at H&P know you care about how your personal information is used and shared, and we take your
            privacy seriously. We gather information about our Users (those that interact with our Website and
            Services), people who attend our marketing events, and about job Candidates, to provide a better, more
            focused experience for our Customers and to enhance our business. Our Privacy Notice will help you
            understand what information we collect and receive at H&P, how H&P uses it, and what choices you have.
            <br />
            <br />
            In this Privacy Notice, personal information (“PI”) means information that identifies, relates to,
            describes, is capable of being associated with, or could reasonably be linked, directly or indirectly,
            with a particular individual. The words “our,” “us,” “we,” and “H&P” refer to Talentito, LLC, and our
            affiliates, if any, (which includes any person or entity that controls us, is controlled by us, or is
            under common control with us, such as our subsidiary (if applicable), parent company (if applicable),
            or our employees). This Privacy Notice does not cover the practices of companies we don’t own or
            control.
          </p>
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

export default PrivacyPolicy;
