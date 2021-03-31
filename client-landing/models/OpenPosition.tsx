enum PositionType {
  Designer = 'designer',
  Developer = 'developer',
  Others = 'others'
}

export type OpenPositionSection = {
  heading?: string;
  data: Array<string>;
  isList?: boolean;
};

export interface OpenPosition {
  slug: string;
  type: PositionType;
  heading: string;
  preview: () => JSX.Element;
  sections: OpenPositionSection[];
}

export const OpenPositions: Array<OpenPosition> = [
  {
    slug: 'chief-marketing-officer',
    type: PositionType.Others,
    heading: 'Chief Marketing Officer',
    preview: () => (
      <p className="font-avenir-book mb-6">
        We’re looking for someone with 5+ years of experience developing and executing go-to-market plans for SaaS
        platforms, including targeted paid advertising, online and offline events, and content marketing (white
        papers, case studies, and blogging etc.) with creativity.
        <br />
        <br />A passion for the web as a storytelling medium, demonstrable through a history of building effective
        campaigns Knowledgeable of modern marketing tools and how best to apply them to various channels is needed.
      </p>
    ),
    sections: [
      {
        heading: 'Overview',
        data: [
          'The Talentito team is growing, and we’re looking for our Chief Marketing Officer.',
          'We feel recruiting software is inherently ineffective at finding the best candidates, and often the people most suitable for positions focused on building products go overlooked.  To solve this, Talentito sources developers, designers, and data scientists in an effort to emphasize profiles that can show a proven track record of building',
          'We thoroughly believe in “show don’t tell” and highlight people that have done work publicly, whether that’s contributing to open source projects, throwing up microsites, prototyped experimental product designs, or otherwise.',
          'To further this mission, we are looking for someone that embraces learning by doing, and embodies a “let’s just try it” mentality.'
        ]
      },
      {
        heading: 'You will',
        isList: true,
        data: [
          'Build out our marketing team, promoting a culture of marketing excellence',
          'Define, measure, and report the performance of all paid marketing channels/campaigns and assess against ROI and KPI goals including customer acquisition and retention',
          'Manage customer segmentation strategy and develop smart attribution modeling, ensuring we reach the right audience with the right message, at the right place and time',
          'Become an expert on people and their careers, continually championing for their needs',
          'Help the team influence strategic decisions across all the corners of our web presence',
          'Own the social media strategy, being directly responsible for conceiving, implementing, and measuring campaigns across various channels'
        ]
      },
      {
        heading: 'We’re looking for someone with:',
        isList: true,
        data: [
          '5+ years of experience developing and executing go-to-market plans for SaaS platforms, including targeted paid advertising, online and offline events, and content marketing (white papers, case studies, and blogging etc.) with creativity',
          'A passion for the web as a storytelling medium, demonstrable through a history of building effective campaigns',
          'Knowledgeable of modern marketing tools and how best to apply them to various channels',
          'Excellent communicator and cross functional collaborator',
          'Proven skills in stakeholder management and visual storytelling',
          'Thrives in a fast-paced, ambiguous environment',
          'Doesn’t take themselves too seriously'
        ]
      },
      {
        data: [
          'Note: all of the above requirements are purely recommendations.  If you feel you can succeed at Talentito, but might not have the exact experience we’re looking for, please still apply with an additional 100 word supplement on how you might set yourself apart.  We encourage career paths that have taken some unique twists and turns, which we feel broadens the scope of perspectives we look for in people that aren’t afraid to approach challenges differently.'
        ]
      },
      {
        heading: 'We will:',
        isList: true,
        data: [
          'Encourage you to operate autonomously',
          'Expect you to own your marketing development, from conception through delivery',
          'Provide you the opportunity to work cross-functionally across any teams you would like to further your professional development with'
        ]
      },
      {
        heading: 'Please include these in your application:',
        isList: true,
        data: [
          'A portfolio, preferably online',
          'Your resume and/or LinkedIn profile',
          'A paragraph on a product, tool, or service that you think is beautifully marketed and why',
          'Your favorite Wikipedia page'
        ]
      },
      {
        heading: 'Location:',
        isList: true,
        data: ['Remote']
      }
    ]
  },
  {
    slug: 'head-of-sales',
    type: PositionType.Others,
    heading: 'Head of Sales',
    preview: () => (
      <p className="font-avenir-book mb-6">
        We’re looking for someone with proven experience leading and scaling small sales teams in an early-stage
        start-up environment and a consistent achievement of hiring, developing, and mentoring successful teams.
      </p>
    ),
    sections: [
      {
        heading: 'Overview',
        data: [
          'The Talentito team is growing, and we’re looking for our Head of Sales.',
          'We feel recruiting software is inherently ineffective at finding the best candidates, and often the people most suitable for positions focused on building products go overlooked.  To solve this, Talentito sources developers, designers, and data scientists in an effort to emphasize profiles that can show a proven track record of building',
          'We thoroughly believe in “show don’t tell” and highlight people that have done work publicly, whether that’s contributing to open source projects, throwing up microsites, prototyped experimental product designs, or otherwise.',
          'To further this mission, we are looking for someone that embraces learning by doing, and embodies a “let’s just try it” mentality.'
        ]
      },
      {
        heading: 'You will',
        isList: true,
        data: [
          'Build out our sales team, promoting a culture of sales excellence',
          'Define, measure, and report the performance of all sales channels/campaigns and assess against ROI and KPI goals including customer acquisition and retention',
          'Develop, refine, and execute a sales strategy by analyzing current state, assessing where we have opportunities to improve - innovating to ensure predictable, repeatable, and scalable results that drive SMB acquisition, revenue growth, and increasing profitability',
          'Become an expert on people and their careers, continually championing for their needs',
          'Help the team influence strategic decisions across all the corners of our web presence',
          'Work closely with the product organization to ensure the product roadmap is aligned to customer needs and feedback; to educate new and existing customers on new value-add features; and to support customer retention and customer activity goals, always putting the customer first'
        ]
      },
      {
        heading: 'We’re looking for someone with:',
        isList: true,
        data: [
          'Proven experience leading and scaling small sales teams in an early-stage start-up environment and a consistent achievement of hiring, developing, and mentoring successful teams',
          'Significant experience as a senior-level sales executive at a high growth company and has a broad understanding of how to inspire and lead high-performing sales and account management teams',
          'Proven success exceeding expectations in hitting customer acquisition and revenue targets within a fast-paced and constantly evolving environment',
          'Knowledgeable of modern sales tools and how best to apply them to various channels',
          'Excellent communicator and cross functional collaborator',
          'Proven skills in stakeholder management and visual storytelling',
          'Thrives in a fast-paced, ambiguous environment',
          'Doesn’t take themselves too seriously'
        ]
      },
      {
        data: [
          'Note: all of the above requirements are purely recommendations.  If you feel you can succeed at Talentito, but might not have the exact experience we’re looking for, please still apply with an additional 100 word supplement on how you might set yourself apart.  We encourage career paths that have taken some unique twists and turns, which we feel broadens the scope of perspectives we look for in people that aren’t afraid to approach challenges differently.'
        ]
      },
      {
        heading: 'We will:',
        isList: true,
        data: [
          'Encourage you to operate autonomously',
          'Expect you to own your marketing development, from conception through delivery',
          'Provide you the opportunity to work cross-functionally across any teams you would like to further your professional development with'
        ]
      },
      {
        heading: 'Please include these in your application:',
        isList: true,
        data: [
          'Your resume and/or LinkedIn profile',
          'A paragraph on an under-the-radar customer segment that you think you think we should target and why'
        ]
      },
      {
        heading: 'Location:',
        isList: true,
        data: ['Remote']
      }
    ]
  },
  {
    slug: 'head-of-design',
    type: PositionType.Designer,
    heading: 'Head of Design',
    preview: () => (
      <p className="font-avenir-book mb-6">
        We’re looking for someone with 5+ years of relevant web design experience—ideally at a tech-forward,
        product-driven company. <br />
        <br />A passion for the web as a storytelling medium, demonstrable through a portfolio of design systems,
        engaging microsites, Sketch libraries, webgl experiments, CSS art, or anything else—you tell us
      </p>
    ),
    sections: [
      {
        heading: 'Overview',
        data: [
          'The Talentito team is growing, and we’re looking for our Head of Design.',
          'We feel recruiting software is inherently ineffective at finding the best candidates, and often the people most suitable for positions focused on building products go overlooked.  To solve this, Talentito sources developers, designers, and data scientists in an effort to emphasize profiles that can show a proven track record of building',
          'We thoroughly believe in “show don’t tell” and highlight people that have done work publicly, whether that’s contributing to open source projects, throwing up microsites, prototyped experimental product designs, or otherwise.',
          'To further this mission, we are looking for someone that embraces learning by doing, and embodies a “let’s just try it” mentality.'
        ]
      },
      {
        heading: 'You will',
        isList: true,
        data: [
          'Build out our design team, promoting a craft and a culture of design excellence',
          'Provide strategic thinking on how we execute product design',
          'Become an expert on people and their careers, continually championing for their needs',
          'Help the team influence strategic decisions across all the corners of our web presence',
          'Build and ensure consistency in our design language system, brand, and platform architecture, and evolve our best practices',
          'Own the end-to-end product development process, partnering closely with cross functional partners like product, engineering, research, data science, and content',
          'Contribute to business strategy and feature prioritization'
        ]
      },
      {
        heading: 'We’re looking for someone with:',
        isList: true,
        data: [
          '5+ years of relevant web design experience—ideally at a tech-forward, product-driven company',
          'A passion for the web as a storytelling medium, demonstrable through a portfolio of design systems, engaging microsites, Sketch libraries, webgl experiments, CSS art, or anything else—you tell us',
          'Expert understanding of the formal elements of design, not just limited to the web and including typography, layout, balance, and proportion',
          'Ability to take something from zero to one, with a demonstrated history for leading the design of complex, large-scale tools that are simple, elegant, and beautiful',
          'Desire and ability to create the best digital design in the industry',
          'Expertise in Figma, Zeplin, Adobe Suite, and other tools for generating wireframes, designs, prototypes, and specifications',
          'Excellent communicator and cross functional collaborator',
          'Proven skills in stakeholder management and visual storytelling',
          'Thrives in a fast-paced, ambiguous environment',
          'Doesn’t take themselves too seriously'
        ]
      },
      {
        data: [
          'Note: all of the above requirements are purely recommendations.  If you feel you can succeed at Talentito, but might not have the exact experience we’re looking for, please still apply with an additional 100 word supplement on how you might set yourself apart.  We encourage career paths that have taken some unique twists and turns, which we feel broadens the scope of perspectives we look for in people that aren’t afraid to approach challenges differently.'
        ]
      },
      {
        heading: 'We will:',
        isList: true,
        data: [
          'Encourage you to operate autonomously',
          'Expect you to own your marketing development, from conception through delivery',
          'Provide you the opportunity to work cross-functionally across any teams you would like to further your professional development with'
        ]
      },
      {
        heading: 'Please include these in your application:',
        isList: true,
        data: [
          'A portfolio, preferably online',
          'Your resume and/or LinkedIn profile',
          'A paragraph on a product, tool, or service that you think is beautifully designed and why',
          'Your favorite Wikipedia page'
        ]
      },
      {
        heading: 'Location:',
        isList: true,
        data: ['Remote']
      }
    ]
  }
];
