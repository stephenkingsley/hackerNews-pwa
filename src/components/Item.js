import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { shared: false };
  }

  storyUrl(data) {
    return data.url || `https://news.ycombinator.com/item?id=${data.id}`;
  }

  async share(event, data) {
    event.preventDefault();
    event.stopPropagation();
    const url = this.storyUrl(data);
    const payload = { title: data.title, text: data.title, url };
    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      this.setState({ shared: true });
      setTimeout(() => this.setState({ shared: false }), 2000);
    } catch (err) {
      window.prompt('Copy this link:', url);
    }
  }

  render() {
    const { data, index, page } = this.props;
    const external = !!data.url;
    const rank = index + 1 + (page - 1) * 30;
    return (
      <li className="card">
        <div className="card-rank">{rank}</div>
        <div className="card-body">
          <a
            className="card-title"
            href={external ? data.url : undefined}
            onClick={external ? undefined : (e) => e.preventDefault()}
            target={external ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
          {data.domain ? <span className="card-domain">({data.domain})</span> : null}
          <div className="card-meta">
            <span className="card-points">
              <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                <path d="M8 3l4 5H4z" fill="currentColor" />
              </svg>
              {data.points || 0} points
            </span>
            <span className="card-sep">·</span>
            <span className="card-author">{data.user || 'unknown'}</span>
            <span className="card-sep">·</span>
            <span className="card-time">{data.time_ago}</span>
          </div>
          <div className="card-actions">
            <Link className="card-comments" to={`/item/${data.id}`}>
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path
                  d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6l-3 3V4a1 1 0 0 0-1-1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              {data.comments_count > 0 ? `${data.comments_count} comments` : 'discuss'}
            </Link>
            <button
              type="button"
              className="card-share"
              onClick={(event) => this.share(event, data)}
              title="Share this story"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path
                  d="M12 5.5a1.8 1.8 0 0 0-1.2.5L5.9 3.3a2 2 0 0 0 0-1L10.8.5A1.8 1.8 0 0 0 12 .3a1.8 1.8 0 1 0-1.8 1.8c0 .1 0 .3.1.4l-4.9 2.7a1.8 1.8 0 1 0 0 2.2l4.9 2.7a1.8 1.8 0 1 0 .8-.7L6.2 7.1a2 2 0 0 0 0-.9l4.9-2.7a1.8 1.8 0 0 0 1-.9A1.8 1.8 0 0 0 12 5.5z"
                  fill="currentColor"
                />
              </svg>
              {this.state.shared ? 'Copied!' : 'Share'}
            </button>
          </div>
        </div>
      </li>
    );
  }
}
