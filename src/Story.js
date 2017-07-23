import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getItem } from './actions/comment';
import Comment from './components/Comment';

class Story extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getItem(id));
  }

  reply(id) {
    window.location.href = `https://news.ycombinator.com/item?id=${id}`;
  }

  renderDescription(data) {
    if (data && Object.hasOwnProperty.call(data, 'title')) {
      return (
        <div className="story-top">
          <div className="story-title">
            <a href={data.url} target="_blank">{data.title}</a>
          </div>
          <ol className="story-ol" onClick={() => this.reply(data.id)}>
            <li>points: {data.points}</li>
            <li>comments_count: {data.comments_count}</li>
            <li>time_ago: {data.time_ago}</li>
            <li
              style={{
                textDecoration: 'underline',
                color: '#333333',
              }}
            >
              reply
            </li>
          </ol>
        </div>
      );
    }
  }

  renderComments(data) {
    if (data && Object.hasOwnProperty.call(data, 'comments') && data.comments.length > 0) {
      return (
        <div>
          {data.comments.map((ele, key) =>
            <Comment data={ele} key={key} />)}
        </div>
      );
    }
    return null;
  }

  render() {
    const { state } = this.props;
    return (
      <div className="content">
        {this.renderDescription(state)}
        {this.renderComments(state)}
      </div>
    );
  }
}

const mapStateToProps = state => state.story;

export default connect(mapStateToProps)(Story);
