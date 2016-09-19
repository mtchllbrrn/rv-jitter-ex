import React from 'react';
import { AutoSizer, List as VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';
import UserListItem from './UserListItem';

export default class List extends React.Component {
  rowRenderer({ data, index, key, style }) {
    return (
      <UserListItem
        data={data[index]}
        key={key}
        style={style}
      />
    );
  }

  render() {
    // if (this.props.loading) return <p>Loading...</p>;
    const { className, data } = this.props;

    return (
      <AutoSizer>
        {
          ({ height, width }) => (
            <VirtualScroll
              className={className}
              height={height}
              width={width}
              rowCount={data.length}
              rowHeight={90}
              rowRenderer={({ index, key, style }) => {
                this.rowRenderer({ data, index, key, style });
              }}
            />
          )
        }
      </AutoSizer>
    );
  }
}
