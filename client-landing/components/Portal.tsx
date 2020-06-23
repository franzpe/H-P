import { createPortal } from 'react-dom';
import { FC } from 'react';

import usePortal from '../libs/hooks/usePortal';

type Props = {
  id: string;
  className?: string;
};

const Portal: FC<Props> = ({ children, id, className }) => {
  const target = usePortal(id, className);
  return createPortal(children, target);
};

export default Portal;
