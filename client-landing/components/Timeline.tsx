import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = [
  { date: '2019-01-01', heading: '2019', description: '' },
  { date: '2019-09-01', heading: 'September', description: 'The idea for Hackers and Painters takes form' },
  { date: '2019-11-01', heading: 'November', description: 'Customer research with recruiters and sourcers' },
  { date: '2020-01-01', heading: '2020', description: '' },
  { date: '2019-01-02', heading: 'January', description: 'Early data models take form' },
  { date: '2019-03-01', heading: 'March', description: 'Designer brought on board, mockups begin' },
  { date: '2019-06-01', heading: 'June', description: 'CTO brought on board, development begins' },
  { date: '2019-08-01', heading: 'August', description: 'Aggregator development with 50+ sources completed' },
  { date: '2019-10-01', heading: 'October', description: 'Designs completed' },
  { date: '2019-11-01', heading: 'November', description: 'Testing begins' },
  { date: '2021-01-01', heading: '2021', description: '' },
  { date: '2021-01-02', heading: 'January', description: 'Soft launch to waitlisted US customers' },
  { date: '2021-02-01', heading: 'February', description: 'Final testing' },
  { date: '2021-03-01', heading: 'March', description: 'Final design changes' },
  { date: '2021-04-01', heading: 'April', description: 'Full release to public' }
];

export default class Timeline extends React.Component<{}, { curIdx: number; prevIdx: number }> {
  constructor(props) {
    super(props);

    const curIdx = VALUES.findIndex(
      (v, idx) => new Date(v.date) > new Date() && (!v[idx + 1] || new Date() > new Date(v[idx + 1]))
    );

    this.state = {
      curIdx: curIdx,
      prevIdx: curIdx - 1
    };
  }

  render() {
    const { curIdx, prevIdx } = this.state;
    const currValue = VALUES[curIdx];
    const prevValue = prevIdx >= 0 ? VALUES[prevIdx] : null;

    return (
      <div>
        <div
          className="timeline"
          style={{
            height: '100px'
          }}
        >
          <HorizontalTimeline
            styles={{
              background: '#ffffff',
              foreground: '#ff882c',
              outline: '#dfdfdf',
              overflow: 'visible',
              height: '100px'
            }}
            labelWidth={180}
            getLabel={date => {
              const label = VALUES.find(v => v.date === date);

              return <p className="text-primary-1-shade font-avenir text-lg font-medium">{label.heading}</p>;
            }}
            index={this.state.curIdx}
            indexClick={index => this.setState({ curIdx: index, prevIdx: index - 1 })}
            values={VALUES.map(x => x.date)}
          />
        </div>
        <div className="text-center">
          {prevValue.description && (
            <p>
              <span className="text-text-primary-1-shade font-avenir text-xl font-medium">
                {prevValue.heading}:{' '}
              </span>
              <span className="text-primary-2-tint font-avenir-book text-lg">{prevValue.description}</span>
            </p>
          )}{' '}
          {currValue.description && (
            <p>
              <span className="text-text-primary-1-shade font-avenir text-xl font-medium">
                {currValue.heading}:{' '}
              </span>
              <span className="text-primary-2-tint font-avenir-book text-lg">{currValue.description}</span>
            </p>
          )}
        </div>
      </div>
    );
  }
}
