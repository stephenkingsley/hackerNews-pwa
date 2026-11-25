import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../api/hackerNewsApi';
import Item from '../components/Item';
import TopBar from '../components/TopBar';
import Loading from '../components/Loading';

const ChannelListScreen = ({ route, navigation, channel, type }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const listRef = React.useRef(null);

  useEffect(() => {
    setPage(Number(route.params?.page) || 1);
  }, [route.params?.page]);

  // Keep the web URL in sync with the current page (original PWA used
  // /:channel/:page style URLs), and reset scroll on page change.
  useEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', String(page));
      window.history.replaceState(window.history.state, '', url);
    }
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, [page]);

  useEffect(() => {
    setLoading(true);
    setItems([]);
    let cancelled = false;
    getData(type, page)
      .then((data) => {
        if (!cancelled) {
          setItems(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [type, page]);

  useFocusEffect(
    useCallback(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: false });
    }, [])
  );

  const renderItem = ({ item, index }) => (
    <Item
      index={index}
      page={page}
      data={item}
      onPress={() => navigation.navigate('item', { id: item.id })}
    />
  );

  const footer = loading ? null : (
    <View style={styles.footerPage}>
      <TouchableOpacity
        onPress={() => setPage((p) => (p > 1 ? p - 1 : 1))}
        disabled={page <= 1}
      >
        <Text style={styles.pageLink}>{'< prev --- '}</Text>
      </TouchableOpacity>
      <Text>{page}</Text>
      <TouchableOpacity onPress={() => setPage((p) => p + 1)}>
        <Text style={styles.pageLink}>{' --- next >'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TopBar active={channel} />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          ref={listRef}
          data={items}
          keyExtractor={(item, index) => String(item.id ?? index)}
          renderItem={renderItem}
          ListEmptyComponent={
            page > 1 ? (
              <Text style={styles.emptyText}>
                content is null, please read prev page!
              </Text>
            ) : null
          }
          ListFooterComponent={footer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  footerPage: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageLink: {
    color: '#ff6600',
  },
  emptyText: {
    textAlign: 'center',
    padding: 16,
  },
});

export default ChannelListScreen;
