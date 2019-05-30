import { StyleSheet, Platform } from 'react-native';

const box = {
    marginVertical: 40,
    marginHorizontal: 20,
    width: 100,
    height: 100,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? '#ccc' : '#28a745',
        justifyContent: 'space-between'
    },
    subContainer: {
        flex: 0.85, 
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    boxLightRed: {
        ...box,
        backgroundColor: '#d73a49'
    },
    boxPurple: {
        ...box,
        backgroundColor: '#6f42c1'
    },
    boxWhite: {
        ...box,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
});

export default styles;