import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Anime } from '@app/store/types';

function DetailFooter(item: Anime) {

    return (
        <View style={styles.synopsisContainer}>
            <View style={styles.textBox}>
                <Text style={styles.titles}>Synopsis</Text>
                <Text>
                    {item.synopsis}
                </Text>
            </View>
        </View>
    )
}

export default DetailFooter;

const styles = StyleSheet.create({
    synopsisContainer: {
        paddingBottom: 25
    },
    textBox: {
        paddingBottom: 10,
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})