import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import AppTextInput from '../../components/AppTextInput';

const Form = () => {
    return (
        <View style={styles.container}>
            <AppTextInput type={'password'}/>
        </View>
    )
}

export default Form;

