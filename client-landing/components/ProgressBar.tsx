import React, { FC } from 'react';
import cx from 'classnames';

type Props = {
  value: number;
  labels: string[];
};

const ProgressBar: FC<Props> = ({ value, labels }) => {
  return (
    <div className="relative pt-1 mb-8">
      <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-primary-3-tint-50 mx-6">
        <div
          style={{ width: value * 100 + '%' }}
          className={cx(
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-primary-3-shade transition-width duration-500 ease w-0'
          )}
        ></div>
      </div>
      <ul className="flex justify-between text-primary-3">
        {labels.map(l => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
