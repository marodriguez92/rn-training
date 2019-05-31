import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

class AppTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Write something...'}
                    onChangeText={(textInput) => this.setState({ textInput })}
                    value={this.state.textInput}
                    secureTextEntry={this.props.type === 'password' ? true : false}
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

AppTextInput.propTypes = {
    type: PropTypes.string
}

AppTextInput.defaultProps = {
    type: 'text'
}

export default AppTextInput;