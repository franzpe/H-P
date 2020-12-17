import React, { useState } from 'react';

type RenderProps = {
  activeIndex: number;
  onChangeIndex: (index: number) => (e: any) => void;
};

type Props = {
  render?: (props: RenderProps) => JSX.Element;
};

const ActiveIndexSwitcher = ({ render }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => (e: any) => {
    setActiveIndex(index);
  };

  return render({ activeIndex, onChangeIndex: handleChange });
};

export default ActiveIndexSwitcher;
