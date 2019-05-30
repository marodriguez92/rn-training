import { StyleSheet } from 'react-native';

const margins = {
    marginVertical: 10
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0366d6'
    },
    box1: {
        ...margins,
        width: 100,
        height: 100,
        backgroundColor: '#d73a49'
    },
    box2: {
        ...margins,
        width: 200,
        height: 200,
        backgroundColor: '#6f42c1'
    },
    box3: {
        ...margins,
        width: 300,
        height: 300,
        backgroundColor: 'white'
    }
});

export default styles;