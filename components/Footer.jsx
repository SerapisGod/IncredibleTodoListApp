import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Matthews App </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        paddingVertical: 16,
        backgroundColor: '#6200ee',
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Footer;
