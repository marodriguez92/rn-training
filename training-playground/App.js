import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false/*true*/}>
          <View style={styles.box1}>
            <Text style={styles.textSM}>{'Box 1'}</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textME}>{'Box 2'}</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.textBG}>{'Box 3'}
              <Text style={[styles.textBG, styles.textRed]}>{' with red text'}</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
