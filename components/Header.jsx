import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My App Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 16,
        backgroundColor: '#6200ee',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
