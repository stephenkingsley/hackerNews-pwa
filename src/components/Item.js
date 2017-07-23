import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class Item extends Component {
  jumpUrl(event, url) {
    event.preventDefault();
    try {
      const newUrl = new URL(url);
      // window.location.href = url;
      window.open(url);
    } catch (e) {
      // window.location.href = `https://news.ycombinator.com/${url}`;
      window.open(`https://news.ycombinator.com/${url}`);
    }
  }

  render() {
    const { data, index, page } = this.props;
    return (
      <li>
        <div>
          <a onClick={(event) => this.jumpUrl(event,data.url)} target="_blank">{index + 1 + (page - 1) * 30}.{data.title}</a>
        </div>
        <div>
          <Link to={`/item/${data.id}`}>
            <span className="item-footer">
              {data.points} by {data.user} |
              {'  ' + data.time_ago} |
              {data.comments_count > 0 ? `   ${data.comments_count}   comments` : '   discuss'}
            </span>
          </Link>
        </div>
      </li>
    );
  }
}
