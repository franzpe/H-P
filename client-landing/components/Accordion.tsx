import React, { RefObject } from 'react';
import cx from 'classnames';
import collapsible from '../libs/collapsible';

interface AccordionChildProps {
  contentRef: RefObject<HTMLDivElement>;
  isCollapsed: boolean;
  onHeaderClick: () => void;
}

interface State {
  isCollapsed: boolean;
}

class Accordion extends React.Component<{}, State> {
  contentRef: RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.contentRef = React.createRef();
    this.state = {
      isCollapsed: true
    };
  }

  static Header: React.FC<Pick<any, Exclude<any, keyof AccordionChildProps>>> = ({
    children,
    isCollapsed,
    onHeaderClick,
    contentRef,
    ...restProps
  }) => {
    return (
      <header onClick={onHeaderClick} {...restProps}>
        {(children as any)(isCollapsed)}
      </header>
    );
  };

  static Content: React.FC<Pick<any, Exclude<keyof any, keyof AccordionChildProps>>> = ({
    children,
    isCollapsed,
    contentRef,
    onHeaderClick,
    className,
    ...restProps
  }) => (
    <div ref={contentRef} className={cx('collapsible', className)} data-collapsed={isCollapsed} {...restProps}>
      {children}
    </div>
  );

  handleClick = () => {
    const { isCollapsed } = this.state;

    if (!this.contentRef.current) return;

    if (isCollapsed) {
      collapsible.expandSection(this.contentRef.current);
    } else {
      collapsible.collapseSection(this.contentRef.current);
    }

    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    const { isCollapsed } = this.state;
    return React.Children.map(this.props.children, (childElement: React.ReactElement<AccordionChildProps>) => {
      return React.cloneElement(childElement, {
        isCollapsed,
        onHeaderClick: this.handleClick,
        contentRef: this.contentRef
      });
    });
  }
}

export default Accordion;
