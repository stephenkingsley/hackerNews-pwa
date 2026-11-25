import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { openExternalUrl } from '../utils/openLink';
import { htmlToText } from '../utils/html';

const CommentItem = ({ user, timeAgo, content, type = 1, id }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { marginLeft: type * 20 }]}
      onPress={() => openExternalUrl(`https://news.ycombinator.com/reply?id=${id}`)}
    >
      <Text style={styles.meta}>
        <Text style={styles.user}>{user}</Text>
        {'    '}
        <Text style={styles.time}>{timeAgo}</Text>
      </Text>
      <Text style={styles.content}>{htmlToText(content)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    padding: 16,
    maxWidth: '100%',
  },
  meta: {
    fontSize: 13,
  },
  user: {
    textDecorationLine: 'underline',
  },
  time: {
    color: '#999999',
  },
  content: {
    fontSize: 13,
    marginTop: 4,
  },
});

export default CommentItem;
