import React, { Fragment, FC } from 'react';

import Accordion from '../Accordion';
import MaterialIcon from '../MaterialIcon';

interface FaqArticleProps {
  header: String;
}

const FaqArticle: FC<FaqArticleProps> = ({ header, children }) => {
  return (
    <article className="border-b border-b-primary-1-tint-lt text-lg last:border-b-0 ">
      <Accordion>
        <Accordion.Header className="flex justify-between items-center py-5 cursor-pointer select-none">
          {isCollapsed => (
            <Fragment>
              <span className="text-primary-2-navy">{header}</span>
              <MaterialIcon className="text-accent-tint">{isCollapsed ? 'add' : 'remove'}</MaterialIcon>
            </Fragment>
          )}
        </Accordion.Header>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion>
    </article>
  );
};
export default FaqArticle;
