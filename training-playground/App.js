import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false/*true*/}>
          <View style={styles.box1}><Text>{'Box 1'}</Text></View>
          <View style={styles.box2}><Text>{'Box 2'}</Text></View>
          <View style={styles.box3}><Text>{'Box 3'}</Text></View>
        </ScrollView>
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
    height: 200,
    width: 500,
    backgroundColor: 'red'
  },
  box2: {
    height: 300,
    width: 500,
    backgroundColor: 'yellow'
  },
  box3: {
    height: 400,
    width: 500,
    backgroundColor: 'green'
  }
});
