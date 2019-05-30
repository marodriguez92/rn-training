import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxLightRed} />
            <View style={styles.boxPurple} />
            <View style={styles.boxWhite} />
        </View>
    )
}

export default Layout;
