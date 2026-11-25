import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { openExternalUrl } from '../utils/openLink';

const Item = ({ data, index, page, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openExternalUrl(data.url)} activeOpacity={0.6}>
        <Text style={styles.title}>
          {index + 1 + (page - 1) * 30}.{data.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.footer}>
          {data.points ? `${data.points} by ${data.user} |` : '  '}
          {'  ' + data.time_ago} |
          {data.comments_count > 0 ? `   ${data.comments_count}   comments` : '   discuss'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#333333',
  },
  footer: {
    fontSize: 13,
    color: '#999999',
    textDecorationLine: 'underline',
  },
});

export default Item;
