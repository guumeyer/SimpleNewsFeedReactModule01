import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropyTypes from 'prop-types';

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropyTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
