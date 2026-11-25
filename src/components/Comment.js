import React from 'react';
import { View } from 'react-native';
import CommentItem from './CommentItem';

// Flatten the nested comment tree (depth-first) exactly like the
// original PWA did, rendering every node as an indented CommentItem.
const flatten = (data, type = 1, acc = []) => {
  if (!data) return acc;
  acc.push({ ...data, type });
  if (data.comments && data.comments.length > 0) {
    data.comments.forEach((ele, key) => flatten(ele, key + type + 1, acc));
  }
  return acc;
};

const Comment = ({ data }) => {
  if (!data) return null;
  const items = flatten(data);
  return (
    <View>
      {items.map((ele) => (
        <CommentItem
          user={ele.user}
          timeAgo={ele.time_ago}
          content={ele.content}
          key={ele.id}
          id={ele.id}
          type={ele.type}
        />
      ))}
    </View>
  );
};

export default Comment;
