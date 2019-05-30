import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
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
            </View>
        )
    }
}

export default Form;

