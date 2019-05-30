import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import AppTextInput from '../../components/AppTextInput';
import TouchableButton from '../../components/TouchableButton';

const Form = () => {
    return (
        <View style={styles.container}>
            <AppTextInput type={'password'} />
            <TouchableButton type={'primary'} />
            <TouchableButton type={'secondary'} />
            <TouchableButton type={'secondary'} disabled={true} />
        </View>
    )
}

export default Form;

