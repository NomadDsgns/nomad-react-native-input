import React from 'react';
import { View, Text, Input, Stylesheet } from 'react-native';


export default function NomadInput({ label, placeholder, value, onChange }) {
    return (<View style={styles.container}>
                <Text style={styles.label}>{label || ''}</Text>
                <Input style={styles.input} 
                        value={value}
                        onChange={onChange} 
                        placeholder={placeholder || ''} />
            </View>);
}

const styles = Stylesheet.create({
    container: {
        flexDirection: "row",
        width: 250,
    },
    label: {
        paddingRight: 15
    },
    input: {
        borderColor: "#000",
        padding: 5,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});
