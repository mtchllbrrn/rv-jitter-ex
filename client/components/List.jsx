import React from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';
import UserListItem from './UserListItem';

export default class List extends React.Component {
  rowRenderer(index, data) {
    return <UserListItem data={data[index]} />;
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
              rowRenderer={({ index }) => {
                return this.rowRenderer(index, data);
              }}
            />
          )
        }
      </AutoSizer>
    );
  }
}
