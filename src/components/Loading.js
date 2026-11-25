import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color="#ff6600" />
  </View>
);

const styles = StyleSheet.create({
  loading: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
