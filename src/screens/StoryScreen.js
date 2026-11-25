import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { getItem } from '../api/hackerNewsApi';
import { openExternalUrl, openItemOnHackerNews } from '../utils/openLink';
import Comment from '../components/Comment';
import TopBar from '../components/TopBar';
import Loading from '../components/Loading';

const StoryScreen = ({ route }) => {
  const id = route.params?.id;
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancelled = false;
    getItem(id)
      .then((data) => {
        if (!cancelled) {
          setStory(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  const renderDescription = () => {
    if (!story || !Object.prototype.hasOwnProperty.call(story, 'title')) {
      return null;
    }
    return (
      <View style={styles.storyTop}>
        <TouchableOpacity onPress={() => openExternalUrl(story.url)}>
          <Text style={styles.storyTitle}>{story.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storyMeta} onPress={() => openItemOnHackerNews(story.id)}>
          <Text style={styles.metaText}>points: {story.points}</Text>
          <Text style={styles.metaText}>comments_count: {story.comments_count}</Text>
          <Text style={styles.metaText}>time_ago: {story.time_ago}</Text>
          <Text style={styles.reply}>reply</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderComments = () => {
    if (!story || !story.comments || story.comments.length === 0) {
      return null;
    }
    return story.comments.map((ele, key) => <Comment data={ele} key={key} />);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.content}>
          {renderDescription()}
          {renderComments()}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
  storyTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  storyTitle: {
    fontSize: 20,
    marginLeft: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  storyMeta: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  metaText: {
    height: 20,
    color: '#999999',
  },
  reply: {
    textDecorationLine: 'underline',
    color: '#333333',
  },
});

export default StoryScreen;
