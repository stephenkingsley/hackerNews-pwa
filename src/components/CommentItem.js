import React from "react";

export default props => {
  return (
    <div
      style={{
        marginLeft: `${props.type * 20}px`
      }}
      className="comment-item"
      onClick={() => reply(props.id)}
    >
      <span className="user">{props.user}</span>
      &nbsp;&nbsp;&nbsp;
      <span className="timeAgo">{props.timeAgo}</span>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

const reply = id => {
  window.location.href = `https://news.ycombinator.com/reply?id=${id}`;
};
