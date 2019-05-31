import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './screens/Form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
