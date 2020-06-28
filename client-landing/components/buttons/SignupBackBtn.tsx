import React, { useState, HTMLProps } from 'react';
import cx from 'classnames';

import MaterialIcon from '../MaterialIcon';

const SignupBackBtn = React.forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
  ({ onClick, href, className }, ref) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleHoverToggle = res => e => {
      setIsHovering(res);
    };

    return (
      <a
        ref={ref}
        className={cx(
          'inline-block text-center text-primary-1-tint cursor-pointer hover:text-primary-2-shade',
          className
        )}
        onMouseEnter={handleHoverToggle(true)}
        onMouseLeave={handleHoverToggle(false)}
        href={href}
        onClick={onClick}
      >
        <div
          className={cx('w-10 h-10 p-2 flex items-center justify-center bg-primary-1-tint rounded-full', {
            ['bg-primary-2-shade']: isHovering
          })}
        >
          <MaterialIcon className="text-white text-3xl">arrow_back</MaterialIcon>
        </div>
        <span className="font-medium">Back</span>
      </a>
    );
  }
);

export default SignupBackBtn;
