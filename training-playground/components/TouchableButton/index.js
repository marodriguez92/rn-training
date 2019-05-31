import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

const TouchableButton = ({ type, disabled }) => {
    return (
        <View>
            <TouchableOpacity disabled={disabled}>
                <Text
                    style={[type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary , disabled ? styles.disabledButton : null]}
                >
                    {type === 'primary' ? 'CONTINUE' : 'SIGN UP'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

TouchableButton.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

TouchableButton.defaultProps = {
    disabled: false
}

export default TouchableButton;