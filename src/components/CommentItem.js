import React, { Component } from 'react';

export default (props) => {
  return (
    <div
      style={{
        marginLeft: `${props.type * 40}px`,
      }}
      className="comment-item"
      dangerouslySetInnerHTML={{ __html: props.content }}
      onClick={() => reply(props.id)}
    />
  );
};

const reply = (id) => {
  window.location.href = `https://news.ycombinator.com/reply?id=${id}`;
};
