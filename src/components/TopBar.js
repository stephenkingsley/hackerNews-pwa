import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CHANNELS = [
  { label: 'NEWS', route: 'news' },
  { label: 'NEW', route: 'newest' },
  { label: 'SHOW', route: 'show' },
  { label: 'ASK', route: 'ask' },
  { label: 'JOBS', route: 'jobs' },
];

const TopBar = ({ active }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topbar}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://news.ycombinator.com/y18.gif' }}
      />
      {CHANNELS.map((channel) => (
        <TouchableOpacity
          key={channel.route}
          onPress={() => navigation.navigate(channel.route, { page: 1 })}
        >
          <Text style={[styles.channel, active === channel.route && styles.active]}>
            {channel.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: '#222222',
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  channel: {
    color: '#ffffff',
    fontSize: 13,
    marginRight: 14,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    paddingBottom: 2,
  },
  active: {
    borderBottomColor: '#ff6600',
  },
});

export default TopBar;
