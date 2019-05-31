import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: '50%', width: '100%' }}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          resizeMode={'contain'}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require('./assets/icon.png')}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}
