/**
 * Author: Gustavo Renato Meyer
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';


import './config/ReactotronConfig'; // Reactotron

import Header from './components/Header';
import Post from './components/Post';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  content: {
    flex: 1,
  },
});

export default class App extends Component<{}> {
  state={
    posts: [
      {
        id: 1,
        title: 'Article Zoombie World',
        author: 'Gustavo Meyer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 2,
        title: 'Book b',
        author: 'Zé Meyer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 3,
        title: 'Book b',
        author: 'Zé Meyer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNative" />
        <ScrollView style={styles.content} >
          { this.state.posts.map(post => <Post key={post.id} post={post} />) }
        </ScrollView>
      </View>

    );
  }
}
