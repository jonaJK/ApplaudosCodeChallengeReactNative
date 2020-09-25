import React from 'react';
import { View, TextInput, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HEADER_COLOR } from '@app/constants/colors';
import { HEADER_HEIGHT, PADDING, HEADER_ICON_SIZE } from '@app/constants/dimensions';

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
                    size={HEADER_ICON_SIZE}
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
                        size={HEADER_ICON_SIZE}
                        color="#ffffff"
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
        paddingLeft: PADDING,
        paddingRight: PADDING,
        paddingBottom: 10,
        height: HEADER_HEIGHT,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        borderColor: 'white'
    },
})
