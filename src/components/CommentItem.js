import React, { Component } from 'react';

export default (props) => {
  return (
    <div
      style={{
        marginLeft: `${props.type * 40}px`,
      }}
      className="comment-item"
      onClick={() => reply(props.id)}
    >
      <span
        style={{
          textDecoration: 'underline',
        }}
      >
        {props.user}
      </span>
      &nbsp;&nbsp;&nbsp;
      <span
        style={{
          color: '#999999',
        }}
      >
        {props.timeAgo}
      </span>
      <div
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
};

const reply = (id) => {
  window.location.href = `https://news.ycombinator.com/reply?id=${id}`;
};
