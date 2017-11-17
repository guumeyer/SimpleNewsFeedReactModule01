import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropyTypes from 'prop-types';

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
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
    borderColor: '#EEEEEE',
    paddingBottom: 10,
  },
  postContainerBody: {
    paddingTop: 10,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    color: '#999999',
    fontSize: 12,
  },
  description: {
    color: '#666666',
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
