import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: "#000",
        fontWeight: '600',
    },
    input: {
        width: '70%',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        color: "#000",
        
    },
    description: {
        fontSize: 20,
        color: "#000",
    },
    inputDescription: {
        width: '70%',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        color: "#000",
        textAlignVertical: 'top'
    },
    saveButton: {
        backgroundColor: "#ba74c4",
        width: 100,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    cancelButton: {
        backgroundColor: "#d16b82",
        width: 100,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    }
});

export default styles;