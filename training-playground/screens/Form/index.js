import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Write something...'}
                    onChangeText={(textInput) => this.setState({ textInput })}
                    value={this.state.textInput}
                />
                <TouchableOpacity
                    onPress={() => this.setState({ textInput: '' })}
                >
                    <Text>{'Clear'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Form;

