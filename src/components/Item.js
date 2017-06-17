import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class Item extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <li>
        <div className="one-line-ellipsis">
          <a href={data.url} target="_blank">{index + 1}.{data.title}</a>
        </div>
        <div>
          <Link to={`/item/${data.id}`}>
            <span className="item-footer">points: {data.points} | comments_count: {data.comments_count} | time_ago: {data.time_ago}</span>
          </Link>
        </div>
      </li>
    );
  }
}
