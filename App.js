import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { linking } from './src/navigation/linking';
import ChannelListScreen from './src/screens/ChannelListScreen';
import StoryScreen from './src/screens/StoryScreen';

const Stack = createNativeStackNavigator();

const Channel = (channel) => (props) => (
  <ChannelListScreen {...props} channel={channel} type={channel} />
);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'} />
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="news"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="news" component={Channel('news')} initialParams={{ page: 1 }} />
          <Stack.Screen name="newest" component={Channel('newest')} initialParams={{ page: 1 }} />
          <Stack.Screen name="show" component={Channel('show')} initialParams={{ page: 1 }} />
          <Stack.Screen name="ask" component={Channel('ask')} initialParams={{ page: 1 }} />
          <Stack.Screen name="jobs" component={Channel('jobs')} initialParams={{ page: 1 }} />
          <Stack.Screen name="item" component={StoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
