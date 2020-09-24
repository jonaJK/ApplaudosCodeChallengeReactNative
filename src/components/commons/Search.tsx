import React from 'react';
import { View, TextInput, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type Props = {
    searchText: string;
    onChangeSearchText: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ searchText, onChangeSearchText }: Props) {

    return (
        <>
            <View style={styles.searchContainer}>
                <Icon
                    name="search"
                    size={30}
                    color="#ffffff"
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="white"
                    onChangeText={searchText => onChangeSearchText(searchText.replace(/\s+/g, ' '))}
                    value={searchText}
                />
                <TouchableNativeFeedback
                    useForeground={true}
                    onPress={() => onChangeSearchText('')}
                >
                    <Icon
                        name="close"
                        size={30}
                        color="#ffffff"
                        onPress={() => onChangeSearchText('')}
                    />
                </TouchableNativeFeedback>
            </View>
        </>
    )
}

export default Search;

const styles = StyleSheet.create({
    searchContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#003666',
    },
    searchInput: {
        flex: 1,
        color: 'white',
        borderColor: 'white'
    },
})
