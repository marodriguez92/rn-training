import { StyleSheet } from 'react-native';

const marginsBorders = {
    marginVertical: 10,
    borderRadius: 25
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0366d6'
    },
    box1: {
        ...marginsBorders,
        width: 100,
        height: 100,
        backgroundColor: '#d73a49'
    },
    box2: {
        ...marginsBorders,
        width: 200,
        height: 200,
        backgroundColor: '#6f42c1'
    },
    box3: {
        ...marginsBorders,
        width: 300,
        height: 300,
        backgroundColor: 'white'
    }
});

export default styles;