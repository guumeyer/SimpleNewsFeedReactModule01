import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropyTypes from 'prop-types';

const styles = StyleSheet.create({
  postContainer: {
    flex:1,
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#DA6C6C',
    shadowOffset: {
      x: 0,
      y: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  postContainerHeader:{
    borderBottomWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 10,
  },
  postContainerBody: {
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 12,
    color: '#999',
  },
  description: {
    flex: 1,
    fontSize: 12,
  },
});

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postContainerHeader}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <View style={styles.postContainerBody}>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  post: PropyTypes.shape({
    id: PropyTypes.number,
    title: PropyTypes.string,
    author: PropyTypes.string,
    description: PropyTypes.string,
  }).isRequired,
};


export default Post;
