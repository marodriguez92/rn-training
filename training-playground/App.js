import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  box2: {
    height: 200,
    width: 200,
    backgroundColor: 'yellow'
  },
  box3: {
    height: 300,
    width: 300,
    backgroundColor: 'green'
  }
});
