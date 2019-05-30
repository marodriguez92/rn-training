import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    )
}

export default Layout;
