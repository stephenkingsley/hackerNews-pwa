import React, { Component } from 'react';

export default class Item extends Component {
  clickItem() {
    console.log('click');
    window.location.href = this.props.data.url;
  }

  render() {
    const { data, index } = this.props;
    return (
      <li onClick={() => {this.clickItem()}}>
        <div className="one-line-ellipsis">{index}.{data.title}</div>
        <div>points: {data.points} | comments_count: {data.comments_count} | time_ago: {data.time_ago}</div>
      </li>
    );
  }
}
