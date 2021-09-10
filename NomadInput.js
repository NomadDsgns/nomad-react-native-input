import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function NomadInput({ label, placeholder, value, onChange, validators, isPassword }) {
    const [ error, setError ] = useState(false);

    useEffect(() => {
        setError(false)
        if (validators && value?.length) {
            validators.map(validator => {
                const check = validator(value);
                if (check) setError(check)
            })
        }
    }, [ value ])

    return (<View style={styles.container}>
                <Text style={styles.label}>{`${label} ↓` || ''}</Text>
                <TextInput style={styles.input} 
                        value={value}
                        onChangeText={onChange} 
                        placeholder={placeholder || ''}
                        secureTextEntry={isPassword || false} />
                <Text style={styles.error}>{error || ''}</Text>
            </View>);
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        shadowColor: '#0043ad',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    label: {
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
    },
    error: {
        paddingTop: 10,
        color: "red",
        textAlign: 'center',
        position: 'relative'
    }
});
