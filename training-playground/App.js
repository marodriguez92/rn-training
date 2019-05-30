import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from './screens/layout';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Layout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
