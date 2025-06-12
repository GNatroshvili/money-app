import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

const SearchInput: React.FC<TextInputProps> = (props) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color="#1A5CFF" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#1A5CFF"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F6FA',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1A5CFF',
    },
    titleWrapper: {

    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        fontFamily: "Montserrat",
        color: "#3A3A3A",
    }
});

export default SearchInput;
