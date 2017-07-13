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
            <span className="item-footer">
              {data.points} by {data.user} |
              {'  ' + data.time_ago} |
              {'  ' + data.comments_count} comments
            </span>
          </Link>
        </div>
      </li>
    );
  }
}
